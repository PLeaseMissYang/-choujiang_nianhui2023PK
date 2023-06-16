var personArray = new Array;
var nameList = [
    {
        "name": "大林伴行",
        "name_en": "Obayashi Tomoyuki",
        "department": "GM",
        "icon": "tx20"
    },
    {
        "name": "杨国洪",
        "name_en": "David Yang",
        "department": "GM",
        "icon": "tx4"
    },
    {
        "name": "张金凤",
        "name_en": "Zhang Jin Feng ",
        "department": "GM",
        "icon": "tx21"
    },
    {
        "name": "周贤",
        "name_en": "Grace Zhou",
        "department": "GM",
        "icon": "tx2"
    },
    {
        "name": "王国芳",
        "name_en": "Jerry Wang",
        "department": "PC",
        "icon": "tx7"
    },
    {
        "name": "蒋魏康",
        "name_en": "Hans Jiang",
        "department": "PC",
        "icon": "tx19"
    },
    {
        "name": "巫瑛",
        "name_en": "Elyn Wu",
        "department": "PC",
        "icon": "tx7"
    },
    {
        "name": "高佳良",
        "name_en": "Gao Jia Liang ",
        "department": "PC",
        "icon": "tx14"
    },
    {
        "name": "朱健",
        "name_en": "Jay Zhu",
        "department": "PC",
        "icon": "tx9"
    },
    {
        "name": "张春亮",
        "name_en": "Zhang Chun Linag ",
        "department": "PC",
        "icon": "tx17"
    },
    {
        "name": "陈龙维",
        "name_en": "Roy Chen",
        "department": "IS",
        "icon": "tx2"
    },
    {
        "name": "朱雪峰",
        "name_en": "Leon Zhu",
        "department": "IS",
        "icon": "tx7"
    },
    {
        "name": "胡超明",
        "name_en": "Billy Hu",
        "department": "IS",
        "icon": "tx8"
    },
    {
        "name": "庄乾明",
        "name_en": "Enson Zhuang",
        "department": "IS",
        "icon": "tx7"
    },
    {
        "name": "薛佳骏",
        "name_en": "Henry Xue",
        "department": "IS",
        "icon": "tx14"
    },
    {
        "name": "吴励励",
        "name_en": "Lily Wu",
        "department": "HR",
        "icon": "tx20"
    },
    {
        "name": "管铭燕",
        "name_en": "Chris Guan",
        "department": "HR",
        "icon": "Chris"
    },
    {
        "name": "夏春芳",
        "name_en": "Flora Xia",
        "department": "HR",
        "icon": "tx12"
    },
    {
        "name": "邓楚楚",
        "name_en": "Iris Deng",
        "department": "HR",
        "icon": "Iris"
    },
    {
        "name": "叶澍清",
        "name_en": "Paul Ye",
        "department": "Technical Planning",
        "icon": "Paul"
    },
    {
        "name": "陈坚",
        "name_en": "Ceaber Chen",
        "department": "Technical Planning",
        "icon": "tx23"
    },
    {
        "name": "陈艳",
        "name_en": "Cherry Chen",
        "department": "Technical Planning",
        "icon": "Cherry"
    },
    {
        "name": "恽华明",
        "name_en": "Eric Yun",
        "department": "Technical Planning",
        "icon": "Eric"
    },
    {
        "name": "钱蓓",
        "name_en": "Elle Qian",
        "department": "Technical Planning",
        "icon": "Elle"
    },
    {
        "name": "顾小炀",
        "name_en": "Evan Gu",
        "department": "Technical Planning",
        "icon": "Evan"
    },
    {
        "name": "魏丽",
        "name_en": "Ada Wei",
        "department": "Technical Planning",
        "icon": "Ada"
    },
    {
        "name": "陆朝辉",
        "name_en": "Ryan Lu",
        "department": "Technical Planning",
        "icon": "luzhaohui"
    },
    {
        "name": "姚丰华",
        "name_en": "Alex Yao",
        "department": "Technical Planning",
        "icon": "Alex"
    },
    {
        "name": "程铭",
        "name_en": "Cheng Ming ",
        "department": "Technical Planning",
        "icon": "chengming"
    },
    {
        "name": "龙雨",
        "name_en": "Dragon Long",
        "department": "Technical Planning",
        "icon": "longyu"
    },
    {
        "name": "徐晓梁",
        "name_en": "Vincent Xu",
        "department": "Technical Planning",
        "icon": "xuxiaoliang"
    },
    {
        "name": "冯立",
        "name_en": "Feng Li ",
        "department": "Technical Planning",
        "icon": "fengli"
    },
    {
        "name": "王海龙",
        "name_en": "Wang Hai Long  ",
        "department": "Technical Planning",
        "icon": "wanghailong"
    },
    {
        "name": "陈仕扬",
        "name_en": "Mando Chen",
        "department": "Technical Planning",
        "icon": "chenshiyang"
    },
    {
        "name": "夏小丹",
        "name_en": "Charlene Xia",
        "department": "ESH",
        "icon": "tx7"
    },
    {
        "name": "黄皖琛",
        "name_en": "Rick Huang",
        "department": "ESH",
        "icon": "tx6"
    },
    {
        "name": "王妮妮",
        "name_en": "Lisa Wang",
        "department": "ESH",
        "icon": "tx10"
    },
    {
        "name": "茅健",
        "name_en": "Walt Mao",
        "department": "Engineering",
        "icon": "tx13"
    },
    {
        "name": "骆庆生",
        "name_en": "Harry Luo",
        "department": "Engineering",
        "icon": "tx19"
    },
    {
        "name": "胡平",
        "name_en": "Hu Ping ",
        "department": "Engineering",
        "icon": "tx6"
    },
    {
        "name": "王豪",
        "name_en": "Wang Hao ",
        "department": "Engineering",
        "icon": "tx17"
    },
    {
        "name": "何非",
        "name_en": "He Fei",
        "department": "Engineering",
        "icon": "tx9"
    },
    {
        "name": "姜巍",
        "name_en": "Forrest Jiang",
        "department": "Engineering",
        "icon": "tx3"
    },
    {
        "name": "郭健睿",
        "name_en": "Adam Guo",
        "department": "Engineering",
        "icon": "tx15"
    },
    {
        "name": "倪惠彬",
        "name_en": "Billy Ni",
        "department": "Engineering",
        "icon": "tx21"
    },
    {
        "name": "国谷晋二",
        "name_en": "Kunitani Shinji",
        "department": "Engineering",
        "icon": "tx25"
    },
    {
        "name": "严咏",
        "name_en": "Miya Yan",
        "department": "Engineering",
        "icon": "tx24"
    },
    {
        "name": "顾姗姗",
        "name_en": "Laura Gu",
        "department": "Engineering",
        "icon": "tx18"
    },
    {
        "name": "陈朔",
        "name_en": "Kamio Chen",
        "department": "Engineering",
        "icon": "tx17"
    },
    {
        "name": "贾洪民",
        "name_en": "Jet Jia",
        "department": "Engineering",
        "icon": "tx22"
    },
    {
        "name": "储月娥",
        "name_en": "Jenny Chu",
        "department": "Engineering",
        "icon": "tx5"
    },
    {
        "name": "任琳晓",
        "name_en": "Ren Lin Xiao ",
        "department": "Engineering",
        "icon": "tx9"
    },
    {
        "name": "平田铁宗",
        "name_en": "Hirata Tetsunori ",
        "department": "Engineering",
        "icon": "tx2"
    },
    {
        "name": "中村一树",
        "name_en": "Nakamura Kazuki ",
        "department": "Engineering",
        "icon": "tx14"
    },
    {
        "name": "布施 玲",
        "name_en": "Fuse Akira ",
        "department": "Engineering",
        "icon": "tx2"
    },
    {
        "name": "沈琦",
        "name_en": "Shen Qi ",
        "department": "Engineering",
        "icon": "tx19"
    },
    {
        "name": "张建平",
        "name_en": "Jacques Zhang",
        "department": "Engineering",
        "icon": "tx23"
    },
    {
        "name": "李红禹",
        "name_en": "Kyrie Li",
        "department": "Engineering",
        "icon": "tx7"
    },
    {
        "name": "吴动",
        "name_en": "Wu Dong ",
        "department": "Engineering",
        "icon": "tx23"
    },
    {
        "name": "张翼",
        "name_en": "Zhang Yi ",
        "department": "Engineering",
        "icon": "tx20"
    },
    {
        "name": "熊天鹏",
        "name_en": "Xiong Tian Peng ",
        "department": "Engineering",
        "icon": "tx12"
    },
    {
        "name": "桑建刚",
        "name_en": "Sang Jian Gang  ",
        "department": "Engineering",
        "icon": "tx8"
    },
    {
        "name": "邢嘉骏",
        "name_en": "Xing Jia Jun ",
        "department": "Engineering",
        "icon": "tx22"
    },
    {
        "name": "娄茂林",
        "name_en": "Lou Mao Lin ",
        "department": "Engineering",
        "icon": "tx25"
    },
    {
        "name": "蔡庆王",
        "name_en": "Cai Qing Wang ",
        "department": "Engineering",
        "icon": "tx19"
    },
    {
        "name": "钱俊",
        "name_en": "Qian Jun ",
        "department": "Engineering",
        "icon": "tx19"
    },
    {
        "name": "王中华",
        "name_en": "Wang Zhong Hua ",
        "department": "Engineering",
        "icon": "tx10"
    },
    {
        "name": "周建波",
        "name_en": "Jason Zhou",
        "department": "Engineering",
        "icon": "tx23"
    },
    {
        "name": "靳宇宁",
        "name_en": "Jin Yu Ning",
        "department": "Engineering",
        "icon": "tx15"
    },
    {
        "name": "陈恩龙",
        "name_en": "Alex Chen",
        "department": "Engineering",
        "icon": "tx5"
    },
    {
        "name": "程汉鹏",
        "name_en": "Chen Han Peng ",
        "department": "Engineering",
        "icon": "tx3"
    },
    {
        "name": "王豪",
        "name_en": "Wolff Wang",
        "department": "Engineering",
        "icon": "tx10"
    },
    {
        "name": "沈凌",
        "name_en": "Sinndy Shen",
        "department": "CSR",
        "icon": "tx10"
    },
    {
        "name": "周茹",
        "name_en": "Rae Zhou",
        "department": "CSR",
        "icon": "tx22"
    },
    {
        "name": "杨皎洁",
        "name_en": "Apple Yang",
        "department": "CSR",
        "icon": "tx2"
    },
    {
        "name": "袁峥",
        "name_en": "Nick Yuan",
        "department": "CSR",
        "icon": "tx3"
    },
    {
        "name": "李含琦",
        "name_en": "Kiki Li",
        "department": "CSR",
        "icon": "tx20"
    },
    {
        "name": "蒋苑媛",
        "name_en": "Cherry Jiang",
        "department": "CSR",
        "icon": "tx8"
    },
    {
        "name": "张斯妤",
        "name_en": "Iris Zhang",
        "department": "CSR",
        "icon": "tx16"
    },
    {
        "name": "陈浩俊",
        "name_en": "Andsen Chen",
        "department": "Sourcing",
        "icon": "tx5"
    },
    {
        "name": "张丽",
        "name_en": "Sally Zhang",
        "department": "Sourcing",
        "icon": "tx16"
    },
    {
        "name": "于锦鸿",
        "name_en": "Angel Yu",
        "department": "Sourcing",
        "icon": "tx10"
    },
    {
        "name": "顾维轶",
        "name_en": "Martin Gu",
        "department": "Sourcing",
        "icon": "tx11"
    },
    {
        "name": "张邱峰",
        "name_en": "Steven Zhang",
        "department": "Sourcing",
        "icon": "tx22"
    },
    {
        "name": "郑军",
        "name_en": "Claire Zheng",
        "department": "Sales & Marketing",
        "icon": "tx9"
    },
    {
        "name": "李玮",
        "name_en": "Wayne Li",
        "department": "Sales & Marketing",
        "icon": "tx1"
    },
    {
        "name": "郑云松",
        "name_en": "Wilson Zheng",
        "department": "Sales & Marketing",
        "icon": "tx9"
    },
    {
        "name": "久光拓也",
        "name_en": "Takuya Hisamitsu",
        "department": "Sales & Marketing",
        "icon": "tx20"
    },
    {
        "name": "单建明",
        "name_en": "James Shan",
        "department": "Sales & Marketing",
        "icon": "tx13"
    },
    {
        "name": "史日萍",
        "name_en": "Sissy Shi",
        "department": "Sales & Marketing",
        "icon": "tx1"
    },
    {
        "name": "周莹",
        "name_en": "Cissy Zhou",
        "department": "Sales & Marketing",
        "icon": "tx17"
    },
    {
        "name": "胡庆军",
        "name_en": "Huxley Hu",
        "department": "Sales & Marketing",
        "icon": "tx15"
    },
    {
        "name": "卢欣瑜",
        "name_en": "Maggie Lu",
        "department": "Sales & Marketing",
        "icon": "tx10"
    },
    {
        "name": "西川  启",
        "name_en": "Nishikawa Hajime ",
        "department": "Sales & Marketing",
        "icon": "tx3"
    },
    {
        "name": "赵嘉斌",
        "name_en": "Bains Zhao",
        "department": "Sales & Marketing",
        "icon": "tx11"
    },
    {
        "name": "徐辰秀",
        "name_en": "Hugh Xu",
        "department": "Sales & Marketing",
        "icon": "tx11"
    },
    {
        "name": "王国荃",
        "name_en": "Jack Wang",
        "department": "Quality",
        "icon": "tx22"
    },
    {
        "name": "魏权",
        "name_en": "Jane Wei",
        "department": "Quality",
        "icon": "tx24"
    },
    {
        "name": "平志纲",
        "name_en": "Carter Ping",
        "department": "Quality",
        "icon": "tx2"
    },
    {
        "name": "林吉",
        "name_en": "Lin Ji ",
        "department": "Quality",
        "icon": "tx16"
    },
    {
        "name": "羊伟龙",
        "name_en": "Ivan Yang",
        "department": "Quality",
        "icon": "tx18"
    },
    {
        "name": "宋臻祺",
        "name_en": "Song Zhen Qi ",
        "department": "Quality",
        "icon": "tx5"
    },
    {
        "name": "王嘉伟",
        "name_en": "Wang Jia Wei ",
        "department": "Quality",
        "icon": "tx17"
    },
    {
        "name": "唐家辉",
        "name_en": "Tang Jia Hui ",
        "department": "Quality",
        "icon": "tx10"
    },
    {
        "name": "唐良",
        "name_en": "Tang Liang ",
        "department": "Quality",
        "icon": "tx3"
    },
    {
        "name": "陈帅",
        "name_en": "Sky Chen",
        "department": "Quality",
        "icon": "tx18"
    },
    {
        "name": "许晓博",
        "name_en": "Xu Xiao Bo ",
        "department": "Quality",
        "icon": "tx2"
    },
    {
        "name": "俞春花",
        "name_en": "Yu Chun Hua ",
        "department": "Quality",
        "icon": "tx14"
    },
    {
        "name": "邓中浩",
        "name_en": "Deng Zhong Hao ",
        "department": "Quality",
        "icon": "tx21"
    },
    {
        "name": "陈煜婷",
        "name_en": "Chen Yu Ting ",
        "department": "Quality",
        "icon": "tx23"
    },
    {
        "name": "童欣",
        "name_en": "Tong Xin ",
        "department": "Quality",
        "icon": "tx17"
    },
    {
        "name": "朱龙飞",
        "name_en": "Joyce Zhu",
        "department": "Quality",
        "icon": "tx15"
    },
    {
        "name": "史君燕",
        "name_en": "Judy Shi",
        "department": "Production",
        "icon": "tx18"
    },
    {
        "name": "黄燕玲",
        "name_en": "Creese Huang",
        "department": "Production",
        "icon": "tx14"
    },
    {
        "name": "王栋",
        "name_en": "Tim Wang",
        "department": "Production",
        "icon": "tx7"
    },
    {
        "name": "朱卫星",
        "name_en": "William Zhu",
        "department": "Production",
        "icon": "tx11"
    },
    {
        "name": "吕江范",
        "name_en": "Leven Lv",
        "department": "Production",
        "icon": "tx14"
    },
    {
        "name": "王晓磊",
        "name_en": "Andy Wang",
        "department": "Production",
        "icon": "tx11"
    },
    {
        "name": "顾剑峰",
        "name_en": "Gu Jian Feng ",
        "department": "Production",
        "icon": "tx18"
    },
    {
        "name": "徐靖",
        "name_en": "Jimmy Xu",
        "department": "Production",
        "icon": "tx25"
    },
    {
        "name": "张钧豪",
        "name_en": "Zhang Jun Hao ",
        "department": "Production",
        "icon": "tx7"
    },
    {
        "name": "王剑峰",
        "name_en": "Wang Jian Feng ",
        "department": "Production",
        "icon": "tx9"
    },
    {
        "name": "杨嘉辰",
        "name_en": "Yang Jia Chen ",
        "department": "Production",
        "icon": "tx24"
    },
    {
        "name": "包放硕",
        "name_en": "Bao Fang Shuo ",
        "department": "Production",
        "icon": "tx17"
    },
    {
        "name": "袁帅",
        "name_en": "Yuan Shuai ",
        "department": "Production",
        "icon": "tx11"
    },
    {
        "name": "许成刚",
        "name_en": "Xu Cheng Gang ",
        "department": "Production",
        "icon": "tx2"
    },
    {
        "name": "楼一兴",
        "name_en": "Lou Yi Xing ",
        "department": "Production",
        "icon": "tx6"
    },
    {
        "name": "王逸翔",
        "name_en": "Wang Yi Xiang ",
        "department": "Production",
        "icon": "tx9"
    },
    {
        "name": "姚琪鑫",
        "name_en": "Yao Qi Xin ",
        "department": "Production",
        "icon": "tx18"
    },
    {
        "name": "蒋驰杰",
        "name_en": "Jiang Chi Jie ",
        "department": "Production",
        "icon": "tx7"
    },
    {
        "name": "施一峰",
        "name_en": "Shi Yi Feng ",
        "department": "Production",
        "icon": "tx15"
    },
    {
        "name": "胡巍",
        "name_en": "Hu Wei ",
        "department": "Production",
        "icon": "tx12"
    },
    {
        "name": "莫大军",
        "name_en": "Mo Da Jun ",
        "department": "Production",
        "icon": "tx25"
    },
    {
        "name": "张嘉骐",
        "name_en": "Zhang Jia Qi ",
        "department": "Production",
        "icon": "tx11"
    },
    {
        "name": "卞耀强",
        "name_en": "Bian Yao Qiang ",
        "department": "Production",
        "icon": "tx6"
    },
    {
        "name": "周玮琳",
        "name_en": "Zhou Wei Lin ",
        "department": "Production",
        "icon": "tx10"
    },
    {
        "name": "王佳鸣",
        "name_en": "Wang Jia Ming ",
        "department": "Production",
        "icon": "tx24"
    },
    {
        "name": "胡辉",
        "name_en": "Hu Hui ",
        "department": "Production",
        "icon": "tx24"
    },
    {
        "name": "杜文晨",
        "name_en": "Du Wen Chen ",
        "department": "Production",
        "icon": "tx3"
    },
    {
        "name": "金维乐",
        "name_en": "Jin Wei Le ",
        "department": "Production",
        "icon": "tx19"
    },
    {
        "name": "徐伟立",
        "name_en": "Xu Wei Li ",
        "department": "Production",
        "icon": "tx12"
    },
    {
        "name": "马飞燕",
        "name_en": "Ma Fei Yan ",
        "department": "Production",
        "icon": "tx16"
    },
    {
        "name": "夏伟",
        "name_en": "Xia Wei ",
        "department": "Production",
        "icon": "tx16"
    },
    {
        "name": "陈玲玲",
        "name_en": "Chen Lin Lin ",
        "department": "Production",
        "icon": "tx13"
    },
    {
        "name": "陆勇伟",
        "name_en": "Lu Yong Wei ",
        "department": "Production",
        "icon": "tx4"
    },
    {
        "name": "康子晨",
        "name_en": "Kang Zi Chen ",
        "department": "Production",
        "icon": "tx20"
    },
    {
        "name": "陆琰纯",
        "name_en": "Lu Yan Chun ",
        "department": "Production",
        "icon": "tx15"
    },
    {
        "name": "钱维熊",
        "name_en": "Qian Wei Xiong ",
        "department": "Production",
        "icon": "tx1"
    },
    {
        "name": "树志俊",
        "name_en": "Shu Zhi Jun ",
        "department": "Production",
        "icon": "tx12"
    },
    {
        "name": "黄锋",
        "name_en": "Huang Feng ",
        "department": "Production",
        "icon": "tx15"
    },
    {
        "name": "许学正",
        "name_en": "Xu Xue  Zheng ",
        "department": "Production",
        "icon": "tx6"
    },
    {
        "name": "但志波",
        "name_en": "Dan Zhi  Bo ",
        "department": "Production",
        "icon": "tx19"
    },
    {
        "name": "周泓卿",
        "name_en": "Zhou Hong Qing ",
        "department": "Production",
        "icon": "tx12"
    },
    {
        "name": "马文遥",
        "name_en": "Ma Wen Yao ",
        "department": "Production",
        "icon": "tx5"
    },
    {
        "name": "吴俊伟",
        "name_en": "Wu Jun Wei ",
        "department": "Production",
        "icon": "tx24"
    },
    {
        "name": "顾荣",
        "name_en": "Gu Rong ",
        "department": "Production",
        "icon": "tx17"
    },
    {
        "name": "姚晓承",
        "name_en": "Yao Xiao Cheng ",
        "department": "Production",
        "icon": "tx1"
    },
    {
        "name": "李志强",
        "name_en": "Li Zhi Qiang ",
        "department": "Production",
        "icon": "tx9"
    },
    {
        "name": "荣悦敏",
        "name_en": "Rong Yue Min ",
        "department": "Production",
        "icon": "tx14"
    },
    {
        "name": "张建赟",
        "name_en": "Zhang Jian Yun ",
        "department": "Production",
        "icon": "tx10"
    },
    {
        "name": "杨建东",
        "name_en": "Yang Jian Dong ",
        "department": "Production",
        "icon": "tx22"
    },
    {
        "name": "陈哲欣",
        "name_en": "Chen Zhe Xin ",
        "department": "Production",
        "icon": "tx7"
    },
    {
        "name": "罗川",
        "name_en": "Luo Chuan ",
        "department": "Production",
        "icon": "tx10"
    },
    {
        "name": "施飞鹿",
        "name_en": "Shi Fei Lu ",
        "department": "Production",
        "icon": "tx18"
    },
    {
        "name": "张云峰",
        "name_en": "Zhang Yun Feng ",
        "department": "Production",
        "icon": "tx12"
    },
    {
        "name": "崔兆军",
        "name_en": "Cui Zhao Jun ",
        "department": "Production",
        "icon": "tx9"
    },
    {
        "name": "王嘉乐",
        "name_en": "Wang Jia Le ",
        "department": "Production",
        "icon": "tx21"
    },
    {
        "name": "王旭成",
        "name_en": "Wang Xu Cheng ",
        "department": "Production",
        "icon": "tx21"
    },
    {
        "name": "丁秋栋",
        "name_en": "Ding Qiu Dong ",
        "department": "Production",
        "icon": "tx4"
    },
    {
        "name": "刘洋",
        "name_en": "Liu Yang ",
        "department": "Production",
        "icon": "tx21"
    },
    {
        "name": "曹家亮",
        "name_en": "Cao Jia Liang ",
        "department": "Production",
        "icon": "tx8"
    },
    {
        "name": "丁晗佳",
        "name_en": "Ding Han Jia ",
        "department": "Production",
        "icon": "tx5"
    },
    {
        "name": "薛辉",
        "name_en": "Xue Hui ",
        "department": "Production",
        "icon": "tx19"
    },
    {
        "name": "魏学永",
        "name_en": "Wei Xue Yong ",
        "department": "Production",
        "icon": "tx14"
    },
    {
        "name": "徐俊杰",
        "name_en": "Xu Jun Jie ",
        "department": "Production",
        "icon": "tx21"
    },
    {
        "name": "黄德龙",
        "name_en": "Huang De Long ",
        "department": "Production",
        "icon": "tx25"
    },
    {
        "name": "鲍峥嵘",
        "name_en": "Bao Zheng Rong ",
        "department": "Production",
        "icon": "tx23"
    },
    {
        "name": "成健",
        "name_en": "Cheng Jian ",
        "department": "Production",
        "icon": "tx9"
    },
    {
        "name": "赵兴印",
        "name_en": "Zhao Xing Yin ",
        "department": "Production",
        "icon": "tx20"
    },
    {
        "name": "王雯俊",
        "name_en": "Wang Wen Jun ",
        "department": "Production",
        "icon": "tx24"
    },
    {
        "name": "文金龙",
        "name_en": "Wen Jin Long ",
        "department": "Production",
        "icon": "tx16"
    },
    {
        "name": "蒋景晖",
        "name_en": "Jiang Jing Hui ",
        "department": "Production",
        "icon": "tx19"
    },
    {
        "name": "李佳",
        "name_en": "Li Jia ",
        "department": "Production",
        "icon": "tx10"
    },
    {
        "name": "陈勇旭",
        "name_en": "Chen Yong Xu ",
        "department": "Production",
        "icon": "tx25"
    },
    {
        "name": "刘斌",
        "name_en": "Liu Bin ",
        "department": "Production",
        "icon": "tx4"
    },
    {
        "name": "叶康",
        "name_en": "Ye Kang ",
        "department": "Production",
        "icon": "tx7"
    },
    {
        "name": "唐佳波",
        "name_en": "Tang Jia Bo ",
        "department": "Production",
        "icon": "tx20"
    },
    {
        "name": "关威刚",
        "name_en": "Guan Wei Gang ",
        "department": "Production",
        "icon": "tx10"
    },
    {
        "name": "姚春敏",
        "name_en": "Yao Chun Min ",
        "department": "Production",
        "icon": "tx12"
    },
    {
        "name": "彭晟敏",
        "name_en": "Peng Sheng Ming ",
        "department": "Production",
        "icon": "tx24"
    },
    {
        "name": "邱怡瞳",
        "name_en": "Qiu Yi Tong ",
        "department": "Production",
        "icon": "tx2"
    },
    {
        "name": "叶军",
        "name_en": "Ye Jun ",
        "department": "Production",
        "icon": "tx21"
    },
    {
        "name": "陈东庚",
        "name_en": "Chen Dong Geng ",
        "department": "Production",
        "icon": "tx11"
    },
    {
        "name": "李晓明",
        "name_en": "Li Xiao Ming ",
        "department": "Production",
        "icon": "tx4"
    },
    {
        "name": "何颖捷",
        "name_en": "He Ying Jie ",
        "department": "Production",
        "icon": "tx14"
    },
    {
        "name": "赵德荣",
        "name_en": "Zhao De Rong ",
        "department": "Production",
        "icon": "tx12"
    },
    {
        "name": "许佳尧",
        "name_en": "Xu Jia Yao ",
        "department": "Production",
        "icon": "tx22"
    },
    {
        "name": "曹磊",
        "name_en": "Cao Lei ",
        "department": "Production",
        "icon": "tx5"
    },
    {
        "name": "何耀斌",
        "name_en": "He Yao Bin ",
        "department": "Production",
        "icon": "tx16"
    },
    {
        "name": "樊庆",
        "name_en": "Fan Qing ",
        "department": "Production",
        "icon": "tx9"
    },
    {
        "name": "祝罗程",
        "name_en": "Zhu Luo Cheng ",
        "department": "Production",
        "icon": "tx14"
    },
    {
        "name": "杜建国",
        "name_en": "Du Jian Guo ",
        "department": "Production",
        "icon": "tx15"
    },
    {
        "name": "周祯翔",
        "name_en": "Zhou Zhen Xiang ",
        "department": "Production",
        "icon": "tx12"
    },
    {
        "name": "蔡雨昇",
        "name_en": "Cai Yu Sheng ",
        "department": "Production",
        "icon": "tx6"
    },
    {
        "name": "张杰",
        "name_en": "Zhang Jie ",
        "department": "Production",
        "icon": "tx16"
    },
    {
        "name": "胡尧杰",
        "name_en": "Hu Yao Jie ",
        "department": "Production",
        "icon": "tx5"
    },
    {
        "name": "高云飞",
        "name_en": "Gao Yun Fei ",
        "department": "Production",
        "icon": "tx11"
    },
    {
        "name": "张忠平",
        "name_en": "Zhang Zhong Ping ",
        "department": "Production",
        "icon": "tx15"
    },
    {
        "name": "陈雅琦",
        "name_en": "Chen Ya Qi ",
        "department": "Production",
        "icon": "tx12"
    },
    {
        "name": "俞岭",
        "name_en": "Yu Ling ",
        "department": "Production",
        "icon": "tx18"
    },
    {
        "name": "沈和彬",
        "name_en": "Shen He Bin ",
        "department": "Production",
        "icon": "tx5"
    },
    {
        "name": "顾潇嵘",
        "name_en": "Gu Xiao Rong ",
        "department": "Production",
        "icon": "tx12"
    },
    {
        "name": "朱庆华",
        "name_en": "Zhu Qing Hua ",
        "department": "Production",
        "icon": "tx21"
    },
    {
        "name": "蒋杰",
        "name_en": "Jiang Jie ",
        "department": "Production",
        "icon": "tx2"
    },
    {
        "name": "李睿隽",
        "name_en": "Li Rui Jun ",
        "department": "Production",
        "icon": "tx18"
    },
    {
        "name": "沈骏良",
        "name_en": "Shen Liang Jun ",
        "department": "Production",
        "icon": "tx1"
    },
    {
        "name": "顾涛",
        "name_en": "Gu Tao ",
        "department": "Production",
        "icon": "tx5"
    },
    {
        "name": "陈鹏飞",
        "name_en": "Chen Peng Fei ",
        "department": "Production",
        "icon": "tx18"
    },
    {
        "name": "李俊",
        "name_en": "Li Jun ",
        "department": "Production",
        "icon": "tx2"
    },
    {
        "name": "俞田田",
        "name_en": "Yu Tian Tian ",
        "department": "Production",
        "icon": "tx17"
    },
    {
        "name": "沈杨",
        "name_en": "Shen Yang ",
        "department": "Production",
        "icon": "tx4"
    },
    {
        "name": "朱文静",
        "name_en": "Cindy Zhu",
        "department": "Shipping",
        "icon": "tx23"
    },
    {
        "name": "韩健明",
        "name_en": "Han Jian Ming ",
        "department": "Shipping",
        "icon": "tx3"
    },
    {
        "name": "张广映",
        "name_en": "Zhang Guang Ying ",
        "department": "Shipping",
        "icon": "tx20"
    },
    {
        "name": "龚敏敏",
        "name_en": "Gong Min Min ",
        "department": "Shipping",
        "icon": "tx11"
    },
    {
        "name": "王丹菁",
        "name_en": "Jasmine Wang",
        "department": "Finance",
        "icon": "tx17"
    },
    {
        "name": "邬海潭",
        "name_en": "Hattie Wu",
        "department": "Finance",
        "icon": "tx17"
    },
    {
        "name": "许赟赟",
        "name_en": "Xu Yun Yun ",
        "department": "Finance",
        "icon": "tx24"
    },
    {
        "name": "茹海靖",
        "name_en": "Renee Ru",
        "department": "Finance",
        "icon": "tx8"
    },
    {
        "name": "于雯婷",
        "name_en": "Selina Yu",
        "department": "Finance",
        "icon": "tx21"
    },
    {
        "name": "曹艳华",
        "name_en": "Cherry Cao",
        "department": "Finance",
        "icon": "tx22"
    },
    {
        "name": "肖团如",
        "name_en": "Eska Xiao",
        "department": "Finance",
        "icon": "tx20"
    },
    {
        "name": "王娟",
        "name_en": "Amy Wang",
        "department": "Finance",
        "icon": "tx16"
    },
    {
        "name": "吴珊",
        "name_en": "Sally Wu",
        "department": "Finance",
        "icon": "tx8"
    },
    {
        "name": "程亦铮",
        "name_en": "Helena Cheng",
        "department": "Finance",
        "icon": "tx20"
    },
    {
        "name": "钱国平",
        "name_en": "Wes Qian",
        "department": "Facility",
        "icon": "tx21"
    },
    {
        "name": "朱继业",
        "name_en": "Job Zhu",
        "department": "Facility",
        "icon": "tx19"
    },
    {
        "name": "姚捷",
        "name_en": "Van Yao",
        "department": "Facility",
        "icon": "tx24"
    },
    {
        "name": "尹理坤",
        "name_en": "Eric Yin",
        "department": "Facility",
        "icon": "tx13"
    },
    {
        "name": "李炯",
        "name_en": "Li Jiong ",
        "department": "Facility",
        "icon": "tx1"
    },
    {
        "name": "姚瑶",
        "name_en": "Yao Yao",
        "department": "Facility",
        "icon": "tx18"
    },
    {
        "name": "王伟",
        "name_en": "Wang Wei ",
        "department": "Facility",
        "icon": "tx24"
    },
    {
        "name": "王国华",
        "name_en": "Wang Guo Hua ",
        "department": "Facility",
        "icon": "tx15"
    },
    {
        "name": "邓成锟",
        "name_en": "Deng Cheng Kun ",
        "department": "Facility",
        "icon": "tx6"
    },
    {
        "name": "瞿黎明",
        "name_en": "Qu Li Ming ",
        "department": "Facility",
        "icon": "tx11"
    },
    {
        "name": "徐清",
        "name_en": "Xu Qing ",
        "department": "Facility",
        "icon": "tx2"
    },
    {
        "name": "董俊朋",
        "name_en": "Dong Jun Peng ",
        "department": "Facility",
        "icon": "tx16"
    },
    {
        "name": "康文伟",
        "name_en": "Kang Wen Wei ",
        "department": "Facility",
        "icon": "tx22"
    },
    {
        "name": "杨东辉",
        "name_en": "Yang Dong Hui ",
        "department": "Facility",
        "icon": "tx11"
    },
];
function initData() {
    personArray = [];
    for (var i = 0; i < nameList.length; i++) {
        var person = {
            id: i,
            image: "img/" + nameList[i].icon + ".jpg",
            name: nameList[i].name,
            name_en: nameList[i].name_en,
            department: nameList[i].department
        }
        personArray.push(person)
    }
}

initData();
