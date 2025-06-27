
export interface Location {
  id: string;
  slug: string;
  name: string;
  province: string;
  image: string;
  highlight: string;
  rating: number;
  advantages: string[];
  challenges: string[];
  costOfLiving: {
    dining: string;
    transport: string;
    utilities: string;
  };
  housing: {
    rent: string;
    buy: string;
  };
  environment: {
    climate: string;
    aqi: string;
    scenery: string;
  };
  gallery: string[];
}

export const locations: Location[] = [
  {
    id: 'rushan-yintan',
    slug: 'rushan-yintan',
    name: '乳山银滩',
    province: '山东威海',
    image: 'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250625163335579.png',
    highlight: '万元买房，一线海景',
    rating: 4,
    advantages: ['房价极低', '一线海景', '空气质量好', '夏季气候凉爽'],
    challenges: ['冬季寒冷漫长', '就业机会少', '商业配套较弱', '医疗资源一般'],
    costOfLiving: {
      dining: '餐饮选择不多，外卖约15-25元/餐。自己做饭成本极低。',
      transport: '公共交通不便，建议自驾或使用电瓶车。',
      utilities: '水电燃气约200-300元/月。冬季取暖费是主要开销。',
    },
    housing: {
      rent: '一室一厅月租金约300-500元，海景房稍贵。',
      buy: '房价总价在2-10万元/套之间，海景房单价约2000-4000元/平米。',
    },
    environment: {
      climate: '温带季风气候，夏季凉爽，冬季寒冷有雪。',
      aqi: '优良，年均AQI指数低于50。',
      scenery: '拥有绵延20公里的沙滩和海岸线，自然风光优美。',
    },
    gallery: [
      'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627141753806.png',
      'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627141806819.png',
      'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627141815059.png',
    ],
  },
  {
    id: 'hegang',
    slug: 'hegang',
    name: '鹤岗',
    province: '黑龙江',
    image: 'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627142609987.png',
    highlight: '两万买房，告别房贷',
    rating: 3.5,
    advantages: ['全国闻名的低房价', '生活成本低', '城市基础设施完善'],
    challenges: ['冬季极其寒冷漫长', '经济转型中，工作机会单一', '地理位置偏远'],
    costOfLiving: {
      dining: '物价低，餐饮消费不高，烧烤是特色，人均50元可以吃得很好。',
      transport: '市内交通便利，公交系统完善，打车便宜。',
      utilities: '水电燃气约200元/月，冬季取暖费约2000-3000元/季度。',
    },
    housing: {
      rent: '一室一厅月租金约300-400元。',
      buy: '房价总价在2-5万元/套之间，是全国房价的洼地。',
    },
    environment: {
      climate: '中温带大陆性季风气候，冬季严寒漫长，夏季短暂凉爽。',
      aqi: '优良，得益于较少的工业污染。',
      scenery: '周边有丰富的森林和矿山公园等自然景观。',
    },
    gallery: [
      'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627142604168.png',
      'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627143055441.png',
      'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627143106624.png',
    ],
  },
  {
    id: 'huizhou',
    slug: 'huizhou',
    name: '惠州',
    province: '广东',
    image: 'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250625163158911.png',
    highlight: '大湾区旁，半海半城',
    rating: 4.5,
    advantages: ['临近深圳，享受大湾区辐射', '气候宜人，四季如春', '兼具海景与城市便利', '医疗教育资源较好'],
    challenges: ['房价相对前两者较高', '部分区域交通拥堵', '台风季节有影响'],
    costOfLiving: {
      dining: '餐饮选择丰富，从路边摊到高端餐厅应有尽有，丰俭由人。',
      transport: '公共交通发达，与深圳有通勤线路。',
      utilities: '水电燃气约300-400元/月，无取暖费用。',
    },
    housing: {
      rent: '大亚湾等区域一室一厅月租金约800-1500元。',
      buy: '均价在1-1.5万元/平米，是临深城市中性价比较高的选择。',
    },
    environment: {
      climate: '亚热带季风气候，温暖湿润，无冬季。',
      aqi: '良好，在珠三角地区属于空气质量较好的城市。',
      scenery: '拥有巽寮湾、双月湾等著名海滩，也有西湖等城市景观。',
    },
    gallery: [
      'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627144005832.png',
      'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627143958192.png',
      'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627143948262.png',
      'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627143940872.png',
      'https://picture-base.oss-cn-hangzhou.aliyuncs.com/image-20250627144016307.png',
    ],
  },
];
