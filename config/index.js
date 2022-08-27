export const config = {
    // 企业微信号配置
    // 企业微信号access_token
    access_token: "922e5499-2316-4792-848b-03254bb2c9b0",
    // 模板消息id
    templateId: "",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [],
     
    // 信息配置
    // 所在省份
    province: "广西",
    // 所在城市
    city: "南宁",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1997", "date": "05-14", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2018-05-09"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
