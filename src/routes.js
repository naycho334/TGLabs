export const endpoints = {
  home: {
    index: '/'
  },
  login: {
    index: '/login'
  },
  signup: {
    index: '/signup'
  },
  services: {
    index: '/services'
  },
  ico_info: {
    index: '/ico-informations'
  },
  dashboard: {
    user: {
      home: {
        index: '/dashboard/user'
      },
      ico_dashboard: {
        index: '/dashboard/user/ico-dashboard'
      },
      ico_information: {
        index: '/dashboard/user/ico-information'
      },
      rewards: {
        index: '/dashboard/user/rewards'
      },
      rewards_information: {
        index: '/dashboard/user/rewards-information'
      },
      referrals: {
        index: '/dashboard/user/referrals'
      },
      withdraw: {
        index: '/dashboard/user/withdraw'
      },
      faq: {
        index: '/dashboard/user/faq'
      },
      settings: {
        index: '/dashboard/user/settings'
      },
    },
    admin: {
      home: {
        index: '/dashboard/admin'
      },
      ico_information: {
        index: '/dashboard/admin/ico-information'
      },
      rewards_information: {
        index: '/dashboard/admin/rewards-information'
      },
      transactions: {
        index: '/dashboard/admin/transactions'
      },
      users: {
        index: '/dashboard/admin/users'
      },
      user: {
        index: '/dashboard/admin/user/:id'
      },
      products: {
        index: '/dashboard/admin/products'
      },
      support: {
        index: '/dashboard/admin/support'
      },
      settings: {
        index: '/dashboard/admin/settings'
      },
    },
  },
  error: {
    404: '/404'
  }
}

export const api = {
  ws: 'https://api.tglabs.io'
}