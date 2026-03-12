// =====================
// 题库数据（可按需扩展）
// =====================
const mbtiQuestions = [
  { id: 'M1', text: '在聚会中，你通常会：', dimension: 'EI', options: { A: '主动和很多人聊天', B: '更愿意和熟悉的人深聊' }, scoring: { A: 'E', B: 'I' } },
  { id: 'M2', text: '当你周末没安排时，你更可能：', dimension: 'EI', options: { A: '临时约人一起活动', B: '独处做自己想做的事' }, scoring: { A: 'E', B: 'I' } },
  { id: 'M3', text: '接触新知识时，你更关注：', dimension: 'SN', options: { A: '具体事实和例子', B: '背后的概念和趋势' }, scoring: { A: 'S', B: 'N' } },
  { id: 'M4', text: '你更喜欢哪种描述？', dimension: 'SN', options: { A: '脚踏实地，重视细节', B: '有想象力，善于联想' }, scoring: { A: 'S', B: 'N' } },
  { id: 'M5', text: '做决定时，你更看重：', dimension: 'TF', options: { A: '逻辑与一致标准', B: '他人感受与关系' }, scoring: { A: 'T', B: 'F' } },
  { id: 'M6', text: '同事意见冲突时，你更倾向：', dimension: 'TF', options: { A: '先讨论谁更合理', B: '先照顾双方情绪' }, scoring: { A: 'T', B: 'F' } },
  { id: 'M7', text: '面对任务，你更舒服的状态是：', dimension: 'JP', options: { A: '提前计划并按表执行', B: '保持弹性边走边调' }, scoring: { A: 'J', B: 'P' } },
  { id: 'M8', text: '旅行前你通常会：', dimension: 'JP', options: { A: '提前订好行程和路线', B: '大方向确定后随性体验' }, scoring: { A: 'J', B: 'P' } },
  { id: 'M9', text: '开会时你更常：', dimension: 'EI', options: { A: '先开口提出观点', B: '先听别人再表达' }, scoring: { A: 'E', B: 'I' } },
  { id: 'M10', text: '学习新工具时，你会先：', dimension: 'SN', options: { A: '看操作步骤并上手试', B: '理解整体原理和框架' }, scoring: { A: 'S', B: 'N' } },
  { id: 'M11', text: '朋友求建议时，你通常：', dimension: 'TF', options: { A: '直接指出关键问题', B: '先共情再给建议' }, scoring: { A: 'T', B: 'F' } },
  { id: 'M12', text: '面对截止日期，你更可能：', dimension: 'JP', options: { A: '提前拆解并留缓冲', B: '临近截止集中冲刺' }, scoring: { A: 'J', B: 'P' } },
  { id: 'M13', text: '一天下来你的状态通常是：', dimension: 'EI', options: { A: '和人互动后更有精神', B: '安静下来才恢复能量' }, scoring: { A: 'E', B: 'I' } },
  { id: 'M14', text: '你更容易被什么打动？', dimension: 'SN', options: { A: '现实可执行的方案', B: '有远景的创新想法' }, scoring: { A: 'S', B: 'N' } },
  { id: 'M15', text: '评估方案时，你首先会问：', dimension: 'TF', options: { A: '是否高效可行？', B: '是否照顾到人？' }, scoring: { A: 'T', B: 'F' } },
  { id: 'M16', text: '你更偏好的工作节奏是：', dimension: 'JP', options: { A: '稳定节奏、清晰流程', B: '灵活变化、快速应对' }, scoring: { A: 'J', B: 'P' } }
];

const big5Questions = [
  { id: 'B1', text: '我对新奇的想法和观点很感兴趣。', dimension: '开放性', reverse: false },
  { id: 'B2', text: '我喜欢尝试新的学习方式或工具。', dimension: '开放性', reverse: false },
  { id: 'B3', text: '我更喜欢固定套路，不太想改变。', dimension: '开放性', reverse: true },
  { id: 'B4', text: '我经常会从不同角度思考同一件事。', dimension: '开放性', reverse: false },

  { id: 'B5', text: '我会提前规划任务并按步骤推进。', dimension: '尽责性', reverse: false },
  { id: 'B6', text: '即使没人监督，我也会把事情做完整。', dimension: '尽责性', reverse: false },
  { id: 'B7', text: '我常常拖到最后一刻才开始。', dimension: '尽责性', reverse: true },
  { id: 'B8', text: '我做事常常缺少条理。', dimension: '尽责性', reverse: true },

  { id: 'B9', text: '我在社交场合通常比较主动。', dimension: '外向性', reverse: false },
  { id: 'B10', text: '我喜欢在人群中表达自己的看法。', dimension: '外向性', reverse: false },
  { id: 'B11', text: '我更偏爱安静独处，而不是社交活动。', dimension: '外向性', reverse: true },
  { id: 'B12', text: '长时间与人互动会让我很快疲惫。', dimension: '外向性', reverse: true },

  { id: 'B13', text: '我会主动体谅别人的处境。', dimension: '宜人性', reverse: false },
  { id: 'B14', text: '我倾向于用温和方式表达不同意见。', dimension: '宜人性', reverse: false },
  { id: 'B15', text: '我常因小事和人发生正面冲突。', dimension: '宜人性', reverse: true },
  { id: 'B16', text: '我不太在意他人的感受。', dimension: '宜人性', reverse: true },

  { id: 'B17', text: '遇到压力时，我通常能保持稳定。', dimension: '情绪稳定性', reverse: false },
  { id: 'B18', text: '我很容易因为小事持续焦虑。', dimension: '情绪稳定性', reverse: true },
  { id: 'B19', text: '面对变化，我一般能较快调整心态。', dimension: '情绪稳定性', reverse: false },
  { id: 'B20', text: '我常常陷入反复担心和自我否定。', dimension: '情绪稳定性', reverse: true }
];

const likertLabels = ['非常不同意', '不同意', '一般', '同意', '非常同意'];
const allQuestions = [...mbtiQuestions, ...big5Questions];

// =====================
// 状态管理
// =====================
const state = {
  currentIndex: 0,
  answers: {},
  phase: 'welcome'
};

const pages = {
  welcome: document.getElementById('welcome-page'),
  test: document.getElementById('test-page'),
  result: document.getElementById('result-page')
};

const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const progressLabel = document.getElementById('progress-label');
const sectionLabel = document.getElementById('section-label');
const progressBar = document.getElementById('progress-bar');

const questionIndex = document.getElementById('question-index');
const questionText = document.getElementById('question-text');
const answerArea = document.getElementById('answer-area');

// =====================
// 视图切换
// =====================
function switchPage(nextPage) {
  Object.values(pages).forEach((page) => page.classList.remove('active'));
  pages[nextPage].classList.add('active');
  state.phase = nextPage;
}

function startTest() {
  state.currentIndex = 0;
  state.answers = {};
  switchPage('test');
  renderQuestion();
}

function restartTest() {
  switchPage('welcome');
}

// =====================
// 渲染题目与进度
// =====================
function renderQuestion() {
  const q = allQuestions[state.currentIndex];
  const answered = state.answers[q.id];

  questionIndex.textContent = `第 ${state.currentIndex + 1} 题 / 共 ${allQuestions.length} 题`;
  questionText.textContent = q.text;
  sectionLabel.textContent = state.currentIndex < mbtiQuestions.length ? 'MBTI 部分' : '大五部分';

  progressLabel.textContent = `进度：${state.currentIndex + 1}/${allQuestions.length}`;
  progressBar.style.width = `${((state.currentIndex + 1) / allQuestions.length) * 100}%`;

  answerArea.innerHTML = '';

  if (state.currentIndex < mbtiQuestions.length) {
    renderMbtiOptions(q, answered);
  } else {
    renderLikertOptions(q, answered);
  }

  prevBtn.disabled = state.currentIndex === 0;
  nextBtn.textContent = state.currentIndex === allQuestions.length - 1 ? '提交结果' : '下一题';
}

function renderMbtiOptions(question, selected) {
  ['A', 'B'].forEach((key) => {
    const button = document.createElement('button');
    button.className = `option-btn ${selected === key ? 'selected' : ''}`;
    button.textContent = `${key}. ${question.options[key]}`;
    button.onclick = () => {
      state.answers[question.id] = key;
      renderQuestion();
    };
    answerArea.appendChild(button);
  });
}

function renderLikertOptions(question, selected) {
  const grid = document.createElement('div');
  grid.className = 'likert-grid';

  for (let i = 1; i <= 5; i += 1) {
    const btn = document.createElement('button');
    btn.className = `likert-btn ${selected === i ? 'selected' : ''}`;
    btn.textContent = i;
    btn.title = likertLabels[i - 1];
    btn.onclick = () => {
      state.answers[question.id] = i;
      renderQuestion();
    };
    grid.appendChild(btn);
  }

  const labels = document.createElement('div');
  labels.className = 'likert-labels';
  labels.innerHTML = '<span>非常不同意</span><span>非常同意</span>';

  answerArea.appendChild(grid);
  answerArea.appendChild(labels);
}

function goPrev() {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
}

function goNext() {
  const q = allQuestions[state.currentIndex];
  const answered = state.answers[q.id];

  if (!answered) {
    alert('请先完成当前题目再继续。');
    return;
  }

  if (state.currentIndex < allQuestions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
    return;
  }

  const hasAllAnswers = allQuestions.every((item) => state.answers[item.id] !== undefined);
  if (!hasAllAnswers) {
    alert('请完成全部题目后再提交。');
    return;
  }

  showResult();
}

// =====================
// 计分逻辑
// =====================
function calculateMbtiResult() {
  const score = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  mbtiQuestions.forEach((q) => {
    const ans = state.answers[q.id];
    const side = q.scoring[ans];
    score[side] += 1;
  });

  const dimensions = [
    ['E', 'I'],
    ['S', 'N'],
    ['T', 'F'],
    ['J', 'P']
  ];

  const percentages = {};
  const letters = dimensions.map(([a, b]) => {
    const total = score[a] + score[b];
    const aPct = Math.round((score[a] / total) * 100);
    const bPct = 100 - aPct;
    percentages[`${a}/${b}`] = { [a]: aPct, [b]: bPct };
    return score[a] >= score[b] ? a : b;
  });

  return { type: letters.join(''), score, percentages };
}

function calculateBig5Result() {
  const dimensions = ['开放性', '尽责性', '外向性', '宜人性', '情绪稳定性'];
  const raw = {
    开放性: 0,
    尽责性: 0,
    外向性: 0,
    宜人性: 0,
    情绪稳定性: 0
  };

  big5Questions.forEach((q) => {
    const answer = state.answers[q.id];
    const value = q.reverse ? (6 - answer) : answer;
    raw[q.dimension] += value;
  });

  // 每个维度 4 题，最低 4 分，最高 20 分
  const standardized = {};
  dimensions.forEach((dim) => {
    standardized[dim] = Math.round(((raw[dim] - 4) / 16) * 100);
  });

  return { raw, standardized };
}

// =====================
// 融合结论规则引擎（12+规则）
// =====================
function level(score) {
  if (score >= 70) return 'high';
  if (score <= 40) return 'low';
  return 'mid';
}

function generateIntegratedReport(mbtiResult, big5Result) {
  const type = mbtiResult.type;
  const b = big5Result.standardized;

  const notes = {
    summary: [],
    cognition: [],
    social: [],
    work: [],
    blindspot: [],
    growth: []
  };

  const isI = type.includes('I');
  const isN = type.includes('N');
  const isT = type.includes('T');
  const isJ = type.includes('J');

  // 1
  if (isI && b.外向性 >= 55) {
    notes.social.push('你更偏向选择性社交，而不是典型的持续外放；在熟悉或有目标的场合会明显更活跃。');
  }
  // 2
  if (!isI && b.外向性 <= 45) {
    notes.social.push('你在群体中愿意发声，但也需要稳定的独处时间来回收精力，属于“可切换型外向”。');
  }
  // 3
  if (isJ && b.尽责性 <= 45) {
    notes.work.push('你主观上偏好结构和计划，但现实执行稳定性可能不足，容易出现“计划完整、落地波动”。');
  }
  // 4
  if (!isJ && b.尽责性 >= 70) {
    notes.work.push('虽然你偏向灵活开放，但执行层面很稳，能把弹性探索转化为可交付结果。');
  }
  // 5
  if (isT && b.宜人性 >= 70) {
    notes.social.push('你做判断时偏理性，但表达方式比典型 T 型更温和，能够兼顾结论与关系。');
  }
  // 6
  if (!isT && b.宜人性 <= 40) {
    notes.cognition.push('你重视价值与感受，但在压力下可能更直接甚至强硬，判断时会更快切到结果导向。');
  }
  // 7
  if (isN && b.开放性 >= 70) {
    notes.cognition.push('你具备明显的“概念驱动”特征，擅长从趋势和模式中提炼方向。');
  }
  // 8
  if (!isN && b.开放性 >= 70) {
    notes.cognition.push('你以现实细节为锚点，同时对新方法保持高开放，具备“务实创新”优势。');
  }
  // 9
  if (isN && b.开放性 <= 45) {
    notes.cognition.push('你会思考可能性，但更愿意在熟悉路径里验证想法，创新节奏偏谨慎。');
  }
  // 10
  if (b.情绪稳定性 <= 40 && isT) {
    notes.blindspot.push('高压下你可能外表理性、内在紧绷，容易对自己和他人都提高标准。');
  }
  // 11
  if (b.情绪稳定性 <= 40 && !isT) {
    notes.blindspot.push('情绪波动会放大你对关系和评价的敏感度，导致决策时犹豫或过度自我审视。');
  }
  // 12
  if (b.情绪稳定性 >= 70 && b.尽责性 >= 70) {
    notes.work.push('你在压力与执行上都较稳定，适合承担节奏紧凑且需要持续交付的任务。');
  }
  // 13
  if (b.外向性 >= 70 && b.宜人性 >= 70) {
    notes.social.push('你有较强的人际带动能力，常在团队中扮演连接者和氛围协调者。');
  }
  // 14
  if (b.外向性 <= 40 && b.开放性 >= 70) {
    notes.work.push('你可能在独立思考与深度创作中表现更好，适合先沉淀后表达。');
  }
  // 15
  if (isJ && b.开放性 >= 70) {
    notes.cognition.push('你会主动给创意加上结构，擅长把抽象想法推进到具体路径。');
  }
  // 16
  if (!isJ && b.情绪稳定性 <= 40) {
    notes.blindspot.push('当外部变化叠加情绪压力时，你可能因选项过多而分散注意力。');
  }

  const summaryLead = `你呈现出 ${type} 的核心倾向，并在大五维度上表现为“${describeBig5Mix(b)}”的综合画像。`;

  fillFallback(notes, type, b);

  return {
    summary: `${summaryLead}${notes.summary[0]}`,
    cognition: notes.cognition.join(' '),
    social: notes.social.join(' '),
    work: notes.work.join(' '),
    blindspot: notes.blindspot.join(' '),
    growth: notes.growth.join(' ')
  };
}

function describeBig5Mix(b) {
  const words = [];
  if (level(b.开放性) === 'high') words.push('高开放');
  if (level(b.尽责性) === 'high') words.push('高执行');
  if (level(b.外向性) === 'high') words.push('高社交能量');
  if (level(b.宜人性) === 'high') words.push('高合作');
  if (level(b.情绪稳定性) === 'high') words.push('高情绪稳定');
  if (words.length === 0) return '均衡型';
  return words.join('、');
}

function fillFallback(notes, type, b) {
  if (!notes.summary.length) {
    notes.summary.push('你的偏好结构清晰，同时保留一定可塑性，说明你在不同场景下具备调整能力。');
  }

  if (!notes.cognition.length) {
    notes.cognition.push(type.includes('N') ? '你倾向先看全局意义，再回到关键细节做判断。' : '你更依赖可验证信息，在事实基础上逐步形成判断。');
  }

  if (!notes.social.length) {
    notes.social.push(type.includes('I') ? '你在人际中偏重深度连接，沟通前会先整理想法。' : '你在人际互动中自然主动，能通过交流快速建立连接。');
  }

  if (!notes.work.length) {
    notes.work.push(type.includes('J') ? '你偏好有里程碑和节奏感的推进方式。' : '你适应变化快，适合在迭代中不断优化结果。');
  }

  if (!notes.blindspot.length) {
    notes.blindspot.push('当任务复杂且时间紧时，你可能忽视过程复盘，导致优势无法稳定复用。');
  }

  notes.growth.push('建议建立“周计划 + 日复盘”双层机制：先定方向，再用小步快跑验证。');
  if (b.情绪稳定性 <= 45) {
    notes.growth.push('在高压阶段加入固定恢复动作（散步、呼吸训练、短时离线），帮助你维持判断质量。');
  }
  if (b.尽责性 <= 45) {
    notes.growth.push('把目标拆为 25-45 分钟的可执行块，并设置外部提醒，降低启动成本。');
  }
  if (b.宜人性 <= 45) {
    notes.growth.push('表达分歧时可先复述对方关注点，再提出你的结论，能显著提升协作效率。');
  }
}

// =====================
// 结果渲染
// =====================
function showResult() {
  const mbtiResult = calculateMbtiResult();
  const big5Result = calculateBig5Result();
  const report = generateIntegratedReport(mbtiResult, big5Result);

  document.getElementById('mbti-type').textContent = mbtiResult.type;
  renderMbtiBars(mbtiResult.percentages);
  renderBig5Chart(big5Result.standardized);

  document.getElementById('report-summary').textContent = report.summary;
  document.getElementById('report-cognition').textContent = report.cognition;
  document.getElementById('report-social').textContent = report.social;
  document.getElementById('report-work').textContent = report.work;
  document.getElementById('report-blindspot').textContent = report.blindspot;
  document.getElementById('report-growth').textContent = report.growth;

  switchPage('result');
}

function renderMbtiBars(percentages) {
  const container = document.getElementById('mbti-dimension-bars');
  container.innerHTML = '';

  Object.entries(percentages).forEach(([pair, value]) => {
    const [left, right] = pair.split('/');
    const leftPct = value[left];
    const rightPct = value[right];

    const item = document.createElement('div');
    item.className = 'dimension-item';
    item.innerHTML = `
      <div><strong>${left}/${right}</strong>：${left} ${leftPct}% · ${right} ${rightPct}%</div>
      <div class="dimension-track">
        <div class="dimension-fill" style="width:${leftPct}%"></div>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderBig5Chart(scores) {
  const canvas = document.getElementById('big5-canvas');
  const ctx = canvas.getContext('2d');
  const entries = Object.entries(scores);

  const dpr = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth;
  const cssHeight = Math.max(320, Math.round(cssWidth * 0.55));
  canvas.width = cssWidth * dpr;
  canvas.height = cssHeight * dpr;
  canvas.style.height = `${cssHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  ctx.clearRect(0, 0, cssWidth, cssHeight);

  const padding = { top: 26, right: 20, bottom: 46, left: 56 };
  const chartW = cssWidth - padding.left - padding.right;
  const chartH = cssHeight - padding.top - padding.bottom;
  const barGap = 16;
  const barW = (chartW - barGap * (entries.length - 1)) / entries.length;

  // 背景网格和刻度
  ctx.strokeStyle = '#e5e7eb';
  ctx.fillStyle = '#6b7280';
  ctx.font = '12px sans-serif';
  for (let i = 0; i <= 5; i += 1) {
    const y = padding.top + chartH * (i / 5);
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + chartW, y);
    ctx.stroke();
    const label = `${100 - i * 20}`;
    ctx.fillText(label, 20, y + 4);
  }

  // 柱形
  entries.forEach(([label, value], idx) => {
    const x = padding.left + idx * (barW + barGap);
    const h = (value / 100) * chartH;
    const y = padding.top + chartH - h;

    const gradient = ctx.createLinearGradient(x, y, x, y + h);
    gradient.addColorStop(0, '#6366f1');
    gradient.addColorStop(1, '#14b8a6');
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, barW, h);

    ctx.fillStyle = '#111827';
    ctx.font = '13px sans-serif';
    ctx.fillText(`${value}`, x + barW / 2 - 10, y - 8);

    ctx.fillStyle = '#374151';
    const shortLabel = label.length > 4 ? `${label.slice(0, 4)}…` : label;
    ctx.fillText(shortLabel, x, cssHeight - 16);
  });
}

window.addEventListener('resize', () => {
  if (state.phase === 'result') {
    const big5Result = calculateBig5Result();
    renderBig5Chart(big5Result.standardized);
  }
});

// =====================
// 事件绑定
// =====================
startBtn.addEventListener('click', startTest);
prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);
restartBtn.addEventListener('click', restartTest);
