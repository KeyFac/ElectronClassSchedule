const { ipcMain, BrowserWindow } = require('electron')
const config = require("./config")

const DEFAULT_SUBJECT = '❎'
exports.DEFAULT_SUBJECT = DEFAULT_SUBJECT
const DEFAULT_SUBJECT_NAME = '错误'

let store = void 0;
exports.pass = function (data) {
  store = data.store
}

let win = void 0

function createEditWindow() {
  if (win && !win.isDestroyed()) {
    win.show()
    return
  }
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
  })
  win.loadFile('html/scheduleConfig.html')
  // win.webContents.openDevTools({ mode: 'detach' })
}

exports.openEdit = () => {
  createEditWindow()
}

exports.defaultConfigs = {
  timeOffset: 0,
  // {date: number, timetable: string, classSchedule: string}
  tempBindings: [],
  subjects: {
    '自@语': '语文自习',
    '自@数': '数学自习',
    '自@英': '英语自习',
    '自@物': '物理自习',
    '自@化': '化学自习',
    '自@政': '政治自习',
    '自@通': '通用自习',
    '自@信': '信息自习',
    '自@走': '走班自习',
    '语@考': '语文考试',
    '数@考': '数学考试',
    '英@考': '英语考试',
    '物@考': '物理考试',
    '化@考': '化学考试',
    '政@考': '政治考试',
    '历@考': '历史考试',
    '体@活': '体育活动',
    '英@听': '英语听力',
    '自': '自习',
    '物': '物理',
    '英': '英语',
    '化': '化学',
    '语': '语文',
    '走': '走班',
    '体': '体育',
    '数': '数学',
    '班': '班会',
    '艺': '艺术',
    '心': '心理',
    '社': '社团活动',
    '不': '不自习',
    '晚': '晚自习1',
    '习': '晚自习3',
  },
  timetables: {
    workday: [
      { 'time': '00:00', 'value': '早自习' },
      { 'time': '07:40', 'value': 0, 'divider': false },
      { 'time': '08:20', 'value': '课间' },
      { 'time': '08:30', 'value': 1, 'divider': false },
      { 'time': '09:10', 'value': '课间' },
      { 'time': '09:20', 'value': 2, 'divider': false },
      { 'time': '10:00', 'value': '大课间' },
      { 'time': '10:30', 'value': 3, 'divider': false },
      { 'time': '11:10', 'value': '课间' },
      { 'time': '11:20', 'value': 4, 'divider': true },
      { 'time': '12:00', 'value': '午休' },
      { 'time': '13:00', 'value': 5, 'divider': false },
      { 'time': '13:40', 'value': '课间' },
      { 'time': '13:50', 'value': 6, 'divider': false },
      { 'time': '14:30', 'value': '大课间' },
      { 'time': '15:00', 'value': 7, 'divider': false },
      { 'time': '15:40', 'value': '课间' },
      { 'time': '15:50', 'value': 8, 'divider': false },
      { 'time': '16:20', 'value': '课间' },
      { 'time': '16:30', 'value': 9, 'divider': true },
      { 'time': '17:30', 'value': '晚休' },
      { 'time': '18:30', 'value': 10, 'divider': false },
      { 'time': '19:30', 'value': '课间' },
      { 'time': '19:40', 'value': 11, 'divider': false },
      { 'time': '21:00', 'value': '放学' },
    ],
    saturday: [
      //	'00:00-07:14': '到校',
      //    '07:15-07:19': '交作业',
      //    '07:20-07:39': '早自习', 
      //    '07:40-07:44': '小课间',
      //    '07:45-08:24': 0,
      //    '08:25-08:34': '课间',
      //    '08:35-09:14': 1,
      //    '09:15-09:24': '课间',
      //    '09:25-10:04': 2,
      //    '10:05-10:14': '课间',
      //    '10:15-10:54': 3,
      //    '10:55-11:04': '课间',
      //    '11:05-11:44': 4,
      //    '11:45-13:19': '午休',
      //    '13:20-13:29': '课间',
      //    '13:30-14:09': 5,
      //    '14:10-14:19': '课间',
      //    '14:20-14:59': 6,
      //    '15:00-15:09': '课间',
      //    '15:10-15:49': 7,
      //    '15:50-15:59': '课间',
      //    '16:00-16:39': 8,
      //    '16:40-23:59': '放学',
      { 'time': '00:00', 'value': '交作业' },
      { 'time': '07:20', 'value': '早自习' },
      { 'time': '07:40', 'value': 0, 'divider': false },
      { 'time': '08:20', 'value': '课间' },
      { 'time': '08:30', 'value': 1, 'divider': false },
      { 'time': '09:10', 'value': '课间' },
      { 'time': '09:20', 'value': 2, 'divider': false },
      { 'time': '10:00', 'value': '大课间' },
      { 'time': '10:30', 'value': 3, 'divider': false },
      { 'time': '11:10', 'value': '课间' },
      { 'time': '11:20', 'value': 4, 'divider': true },
      { 'time': '12:00', 'value': '午休' },
      { 'time': '13:00', 'value': 5, 'divider': false },
      { 'time': '13:40', 'value': '课间' },
      { 'time': '13:50', 'value': 6, 'divider': false },
      { 'time': '14:30', 'value': '大课间' },
      { 'time': '15:00', 'value': 7, 'divider': false },
      { 'time': '15:40', 'value': '课间' },
      { 'time': '15:50', 'value': 8, 'divider': false },
      { 'time': '16:40', 'value': '放学' },
    ],
    sunday: [
      { 'time': '00:00', 'value': '到校' },
      { 'time': '17:40', 'value': 0, 'divider': false },
      { 'time': '19:20', 'value': '课间' },
      { 'time': '19:30', 'value': 1, 'divider': false },
      { 'time': '20:30', 'value': '课间' },
      { 'time': '20:40', 'value': 2, 'divider': false },
      { 'time': '21:50', 'value': '放学' },
    ]
  },
  // [value, [{condition: [...], value: ''}, ...]]
  classSchedules: Object.fromEntries(Object.entries({
    monday: ['数', '数', '语', '语', '英', '物', '化', '走', '走', '晚', '自@信', '习'],
    tuesday: ['语', '语', '英', '数', '数', '物', '物', '化', '社', '晚', '自@政', '习'],
    wednsday: ['语', '语', '走', '化', '体', '数', '数', '英', '物', '晚', '自@物', '习'],
    thursday: ['物', '化', '走', '数', '数', '语', '语', '英', '体@活', '晚', '自@数', '习'],
    friday: ['数', '数', '英', '语', '语', '体', '走', '化', '自', '晚', '自@信', '习'],
    saturday: [['英', '语', '英'], ['物', '化', '英'], ['化', '化', '物'], ['走', '走', '物'], ['走', '走', '数'], ['', '物', '走'], ['', '物', '走'], ['', '英', '化'], ['', '英', '化']],
    // ['语@考', '数@考', '物', '英', '化', '走']
    sunday: ['晚', '自@化', '习'],
  }).map(([k, v]) => [k, v.map(x => [{ condition: ['always'], value: x }])])),
  states: {
    weekIndex: {
      offset: 0,
      type: 'dateAuto',
      begin: 0,
      cycle: 7,
      max: 4,
    },
  },
  // condition: ['type', ...args]
  bindings: [
    [
      {
        condition: ['always'],
        timetable: 'sunday',
        classSchedule: 'sunday',
      },
    ],
    [
      {
        condition: ['always'],
        timetable: 'workday',
        classSchedule: 'monday',
      },
    ],
    [
      {
        condition: ['always'],
        timetable: 'workday',
        classSchedule: 'tuesday',
      },
    ],
    [
      {
        condition: ['always'],
        timetable: 'workday',
        classSchedule: 'wednsday',
      },
    ],
    [
      {
        condition: ['always'],
        timetable: 'workday',
        classSchedule: 'thursday',
      },
    ],
    [
      {
        condition: ['always'],
        timetable: 'workday',
        classSchedule: 'friday',
      },
    ],
    [
      {
        condition: ['always'],
        timetable: 'saturday',
        classSchedule: 'saturday',
      },
    ],
  ]
}

function applyDefaults(configs) {
  configs = Object.assign({}, exports.defaultConfigs, configs)
  return configs
}

let cache = void 0;
exports.scheduleConfig = (() => {
  let lock = 0;
  function scheduleConfig(operator) {
    let configs = lock == 0 ? applyDefaults(config.fetchConfig().scheduleConfig) : cache
    cache = configs
    if (!operator) return configs
    lock += 1
    try {
      let ret = operator(configs)
      lock -= 1
      if (lock == 0) store.set('scheduleConfig', configs)
      ipcMain.emit('scheduleConfig.changed', null, configs)
      for (let k in cachedData) cachedData[k] = {}
      exports.clearErrorList()
      return ret
    } catch (e) {
      lock -= 1
    }
  }
  return scheduleConfig
})();

ipcMain.handle('scheduleConfig.get', () => exports.scheduleConfig())

ipcMain.handle('scheduleConfig.set', (_, arg) => {
  exports.scheduleConfig((configs) => {
    Object.assign(configs, arg)
  })
})

ipcMain.handle('scheduleConfig.getStateValue', (event, state) => {
  return getStateValue(state)
})

ipcMain.handle('scheduleConfig.getToday', () => {
  let { timetable, classSchedule } = getBinding(new Date().toLocaleDateString())
  return [timetable, classSchedule]
})

exports.load = () => {
  exports.scheduleConfig((a) => { })
}

function getThisMonday() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 获取今天是本周的第几天（0 是周日，1 是周一，...，6 是周六）
  const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // 计算本周周一的日期
  const monday = new Date(today.setDate(diff));
  return monday;
}

exports.getWeekSchedule = () => {
  let output = {}
  let monday = getThisMonday()
  for (let i = 0; i < 7; i++) {
    let date = new Date(monday.getTime() + i * 24 * 60 * 60 * 1000).toLocaleDateString()
    let binding = getBinding(date)
    let classSchedule = cache.classSchedules[binding.classSchedule]
    classSchedule = cachedData.classSchedule[binding.classSchedule] ??
      (cachedData.classSchedule[binding.classSchedule] = classSchedule.map((a, index) => {
        try { return evaluateConditions(a).value } catch (e) {
          e.message += '\n在课程条件判断时出现问题: '
          e.message += `课程表 ${binding.classSchedule} 课程 第${index}节 时间表`
          exports.currentError(e)
          return DEFAULT_SUBJECT
        }
      }))
    output[["周一", "周二", "周三", "周四", "周五", "周六", "周日"][i]] = classSchedule
  }
  return output
}

ipcMain.handle('scheduleConfig.getWeekSchedule', () => exports.getWeekSchedule())

let errorList = []
exports.clearErrorList = () => {
  errorList = []
  exports.sendErrorList()
}
exports.sendErrorList = () => {
  if (win && !win.isDestroyed()) {
    win.webContents.send('scheduleConfig.binding.errorList', errorList)
  }
}

ipcMain.on('scheduleConfig.binding.getErrorList', exports.sendErrorList)
exports.currentError = (error) => {
  if (!error) return
  errorList.push({
    message: error.message,
    stack: error.stack,
  })
  if (errorList.length > 10) errorList.shift()
  exports.sendErrorList()
}

const stateTypes = {
  'manual': ({ value }) => value,
  'dateAuto': ({ begin, cycle, max, offset }) => {
    let t = Date.now() - begin;
    let d = Math.floor(t / (cycle * 24 * 60 * 60 * 1000));
    d += offset + max * 1000
    let r = d % max;
    return r;
  },
  'javascript': ({ code }) => {
    let state = getStateValue;
    let sc = exports.scheduleConfig;
    return eval(code)
  }
}
function getStateValue(stateName) {
  let state = cache.states[stateName]
  if (!state) throw new Error('未知状态名: ' + stateName)
  if (state.type in stateTypes) {
    return stateTypes[state.type](state)
  }
  return -1
}

const conditionTypes = {
  'always': () => true,
  'never': () => false,
  'equals': (state, value) => getStateValue(state) == value,
  'notEquals': (state, value) => getStateValue(state) != value,
  'lessThan': (state, value) => getStateValue(state) < value,
  'lessThanEquals': (state, value) => getStateValue(state) <= value,
  'greaterThan': (state, value) => getStateValue(state) > value,
  'greaterThanEquals': (state, value) => getStateValue(state) >= value,
  'between': (state, value) => getStateValue(state) >= value[0] && getStateValue(state) <= value[1],
  'notBetween': (state, value) => getStateValue(state) < value[0] || getStateValue(state) > value[1],
  'javascript': (code) => {
    let state = getStateValue
    let sc = exports.scheduleConfig
    try {
      return eval(code)
    } catch (e) {
      e.message += '\n条件判断javascript错误'
      throw e
    }
  }
}
function evaluateConditions(conditions) {
  let result = conditions.find(a => conditionTypes[a.condition[0]](...a.condition.slice(1)))
  if (!result) throw new Error('无满足任一条件的值')
  return result
}

function getBinding(date) {
  for (let binding of cache.tempBindings) {
    if (binding.date + 24 * 60 * 60 * 1000 < Date.now()) {
      exports.scheduleConfig((c) => {
        c.tempBindings.splice(c.tempBindings.findIndex(b => b.date == binding.date), 1)
      })
      continue
    }
    console.log(new Date(binding.date).toLocaleDateString(), date)
    if (new Date(binding.date).toLocaleDateString().substring(0, 10) == date) return binding
  }
  let day = new Date(date).getDay()
  let binding = cache.bindings[day]
  return evaluateConditions(binding)
}
getBinding = ((fun) => {
  return (date) => {
    try { return fun(date) } catch (e) {
      e.message += '\n获取数据绑定错误'
      throw e
    }
  }
})(getBinding);

function timeDecreasedOneMinute(time) {
  let [h, m] = time.split(':')
  m = parseInt(m) - 1
  if (m < 0) {
    m = 59
    h = parseInt(h) - 1
  }
  if (h < 0) h = 23
  return h + ':' + m
}

exports.proxy = {}
let cachedData = {
  timetable: {},
  divider: {},
  classSchedule: {},
}

Object.defineProperty(exports.proxy, "timeOffset", {
  get: () => {
    return cache ? cache.timeOffset : 0
  }
})
exports.proxy.subject_name = new Proxy({}, {
  get: (target, name) => {
    if (name == DEFAULT_SUBJECT) return DEFAULT_SUBJECT_NAME
    return cache.subjects[name]
  }
})
exports.proxy.timetable = new Proxy({}, {
  get: (target, name) => {
    if (cachedData.timetable[name]) return cachedData.timetable[name]
    let tt = cache.timetables[name]
    let generated = {}
    for (let i in tt) {
      let v = tt[i]
      let next = tt[+i + 1] ?? { time: '00:00' }
      generated[v.time + '-' + timeDecreasedOneMinute(next.time)] = tt[i].value
    }
    cachedData.timetable[name] = generated
    return generated
  }
})
exports.proxy.divider = new Proxy({}, {
  get: (target, name) => {
    if (cachedData.divider[name]) return cachedData.divider[name]
    let tt = cache.timetables[name]
    let generated = []
    for (let i of tt) {
      if (i.divider) generated.push(i.value)
    }
    cachedData.divider[name] = generated
    return generated
  }
})
exports.proxy.daily_class = new Proxy({}, {
  get: (target, name) => {
    let { classSchedule: classScheduleName, timetable } = getBinding(new Date().toLocaleDateString())
    let classSchedule = cache.classSchedules[classScheduleName]
    classSchedule = cachedData.classSchedule[classScheduleName] ??
      (cachedData.classSchedule[classScheduleName] = classSchedule.map((a, index) => {
        try { return evaluateConditions(a).value } catch (e) {
          e.message += '\n在课程条件判断时出现问题: '
          e.message += `课程表 ${classScheduleName} 课程 第${index}节 时间表 ${timetable}`
          exports.currentError(e)
          return DEFAULT_SUBJECT
        }
      }))
    return {
      classList: classSchedule,
      timetable
    }
  }
})
