import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '导航一', href: '' } },
      { name: 'item1', a: { children: '导航二', href: '' } },
      { name: 'item2', a: { children: '导航三', href: '' } },
      { name: 'item3', a: { children: '导航四', href: '' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title',
          children : '知识产权源于创新    和谐社会源于尊重',
        },
        content: {
          className: 'banner1-content',
          children: 'Intellectual property from innovation harmonious society in respect',
        },
        button: { className: 'banner1-button', children: '了解更多' },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children: '保护知识产权，我们在行动。',
        },
        content: {
          className: 'banner1-content',
          children: 'To protect intellectual property, we are in action.',
        },
        button: { className: 'banner1-button', children: '了解更多' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg2' },
        title: {
          className: 'banner1-title',
          children: '一站式商标注册服务机构',
        },
        content: {
          className: 'banner1-content',
          children: '为客户省心，专注做事',
        },
        button: { className: 'banner1-button', children: '了解更多' },
      },
      {
        name: 'elem~jz23wx8xbit',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg3' },
        title: {
          className: 'banner1-title',
          children: '商标专利 · 创品牌 做自己',
        },
        content: {
          className: 'banner1-content',
          children: '为客户创造价值，提升品牌竞争力',
        },
        button: { className: 'banner1-button', children: '了解更多' },
      },
    ],
  },
};

export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'What We Do?' }],
  },
  subTitleWrapper: {
    className: 'title-wrapper-en',
    children: [{ name: 'title', children: '我们是做什么的？' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: './assets/do1.png',
          },
          title: { className: 'content0-title', children: '商品注册' },
          content: { children: '快人一步 注册无忧' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: './assets/do2.png',
          },
          title: {
            className: 'content0-title',
            children: '商标驳回复审',
          },
          content: { children: '有事前风险控制和质量控制能力' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: './assets/do3.png',
          },
          title: { className: 'content0-title', children: '商标买卖' },
          content: { children: '承接各类商标的代理与交易' },
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '客户案例', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: 'Customer Case',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: './assets/example.png',
          },
          content: { children: '案例1' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: './assets/example.png',
          },
          content: { children: '案例2' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: './assets/example.png',
          },
          content: { children: '案例3' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: './assets/example.png',
          },
          content: { children: '案例4' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: './assets/example.png',
          },
          content: { children: '案例5' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: './assets/example.png',
          },
          content: { children: '案例6' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: './assets/example.png',
          },
          content: { children: '案例7' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: './assets/example.png',
          },
          content: { children: '案例8' },
        },
      },
    ],
  },
};

export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于阿里云强大的基础资源',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '企业资源管理' },
          content: {
            className: 'content3-content',
            children:
              '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云安全' },
          content: {
            className: 'content3-content',
            children:
              '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云监控' },
          content: {
            className: 'content3-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '移动' },
          content: {
            className: 'content3-content',
            children:
              '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '分布式中间件' },
          content: {
            className: 'content3-content',
            children:
              '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children:
              '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <div>
        <span>
          ©2019 <a href="#">lilei</a> All Rights
          Reserved
        </span>
      </div>
    ),
  },
};
