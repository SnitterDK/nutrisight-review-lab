const state = { step: 1 };
const steps = [...document.querySelectorAll('.step')];
const panels = [...document.querySelectorAll('.form-step')];
const back = document.querySelector('#back');
const next = document.querySelector('#next');
const form = document.querySelector('#meal-form');
const boundaryTitle = document.querySelector('#boundary-title');
const boundaryCopy = document.querySelector('#boundary-copy');

const boundaries = {
  1: ['Observation is not interpretation', 'A meal description can document visible components. It cannot reliably establish quantities, hidden ingredients, health effects, or personal dietary needs.'],
  2: ['Missing context should stay visible', 'Preparation, portion and personal context change interpretation. Unknown details are recorded as unknown—not replaced with false precision.'],
  3: ['Credentialed professionals keep their role', 'The brief organizes questions and evidence. An RDN can interpret it alongside health history, goals, preferences and clinical context.']
};

function value(id) {
  return document.querySelector(id).value.trim();
}

function buildBrief() {
  const components = value('#components').split('\n').map(item => item.trim()).filter(Boolean);
  const certainty = form.elements.certainty.value;
  const prep = value('#preparation') || 'Not recorded';
  const missing = value('#missing') || 'No unknowns were recorded';
  const goal = value('#goal');
  const rows = [
    ['Meal moment', value('#meal-name') || 'Untitled meal'],
    ['Observed components', components.join(', ') || 'None recorded'],
    ['Context supplied by the individual', `Preparation: ${prep}. Portion confidence: ${certainty}.`],
    ['Uncertainty kept visible', missing],
    ['Question for RDN review', goal]
  ];
  document.querySelector('#brief').innerHTML = rows.map(([label, text]) =>
    `<div class="brief-row"><strong>${escapeHtml(label)}</strong>${escapeHtml(text)}</div>`
  ).join('');
  localStorage.setItem('nutrisight-review-brief', JSON.stringify({ rows, createdAt: new Date().toISOString() }));
  return rows.map(([label, text]) => `${label}: ${text}`).join('\n');
}

function escapeHtml(text) {
  return String(text).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function showStep(number) {
  state.step = Math.max(1, Math.min(3, number));
  steps.forEach(step => step.classList.toggle('active', Number(step.dataset.step) === state.step));
  panels.forEach(panel => panel.classList.toggle('active', Number(panel.dataset.panel) === state.step));
  back.disabled = state.step === 1;
  back.hidden = state.step === 3;
  next.hidden = state.step === 3;
  [boundaryTitle.textContent, boundaryCopy.textContent] = boundaries[state.step];
  if (state.step === 3) buildBrief();
}

next.addEventListener('click', () => {
  if (state.step === 2 && !document.querySelector('#consent').checked) {
    document.querySelector('.checkbox').scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.querySelector('.checkbox').style.outline = '3px solid rgba(189,116,0,.25)';
    return;
  }
  showStep(state.step + 1);
});
back.addEventListener('click', () => showStep(state.step - 1));
steps.forEach(step => step.addEventListener('click', () => {
  const requested = Number(step.dataset.step);
  if (requested < state.step || (requested === 2 && state.step === 1)) showStep(requested);
}));
document.querySelector('#copy-brief').addEventListener('click', async event => {
  await navigator.clipboard.writeText(buildBrief());
  event.currentTarget.textContent = 'Copied';
  setTimeout(() => { event.currentTarget.textContent = 'Copy brief'; }, 1500);
});
document.querySelector('#reset-workflow').addEventListener('click', () => {
  form.reset();
  localStorage.removeItem('nutrisight-review-brief');
  showStep(1);
});
showStep(1);
