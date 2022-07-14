import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Content from '../views/Content.vue'

import StatsComponent from '../views/Stats.vue'
import ResourcesComponent from '../views/Resources.vue'
import AccountComponent from '../views/Account.vue'

const routes: Array<RouteRecordRaw> = [
  {
		path: '/',
		redirect: '/home'
  },
	{
		path: '/home',
		name: 'Home',
		component: Home
  },
    {
        path: '/content',
        name: 'Content',
        component: Content
    }
	/*{
		path: '/stats',
		/users/:id
		name: 'Stats',
		redirect: '/stats/ranking',
		component: StatsComponent,
		children:[
			{
				path: 'ranking',
				name: 'Ranking',
				component: () => import('../components/pages/Ranking.vue')
			},
			{
				path: 'rankingitem',
				name: 'RankingItem',
				component: () => import('../components/pages/RankingItems.vue')
			},
			{
				path: 'activity',
				name: 'Activity',
				component: () => import('../components/pages/Activity.vue')
			}]
	},
	{
		path: '/resources',
		name: 'Resources',
		redirect: '/resources/aboutus',
		component: ResourcesComponent,
		children:[
			{
				path: 'aboutus',
				name: 'Aboutus',
				component: () => import('../components/pages/Aboutus.vue')
			},
			{
				path: 'creators',
				name: 'Creators',
				component: () => import('../components/pages/Creators.vue')
			},
			{
				path: 'blog',
				name: 'Blog',
				component: () => import('../components/pages/Blog.vue')
			},
			{
				path: 'faqs',
				name: 'FAQs',
				component: () => import('../components/pages/FAQs.vue')
			},
			{
				path: 'termspolicy',
				name: 'TermsPolicy',
				component: () => import('../components/pages/TermsPolicy.vue')
			},
			{
				path: 'privacypolicy',
				name: 'PrivacyPolicy',
				component: () => import('../components/pages/PrivacyPolicy.vue')
			},
			{
				path: 'contact',
				name: 'Contact',
				component: () => import('../components/pages/Contact.vue')
			}
		]
	},
	{
		path: '/create',
		name: 'Create',
		component: () => import('../views/Create.vue')
	},
	{
		path: '/itemdetail/:id',
		name: 'ItemDetail',
		component: () => import('../components/pages/ItemDetail.vue')
	},
	{
		path: '/account',
		name: 'Account',
		redirect: '/account/creatorprofile',
		component: AccountComponent,
		children:[
			{
				path: 'creatorprofile',
				name: 'CreatorProfile',
				component: () => import('../components/pages/CreatorProfile.vue')
			},
            {
                path: 'collections',
                name: 'Collections',
                component: () => import('../components/pages/Collections.vue')
            },
			{
				path: 'creatorprofileedit',
				name: 'CreatorProfileEdit',
				component: () => import('../components/pages/CreatorProfileEdit.vue')
			}]
	},
	{
		path: '/wallet',
		name: 'Wallet',
		component: () => import('../views/Wallet.vue')
	}*/
]

const router = createRouter({
	scrollBehavior() {
		const appDOm = document.getElementById('app')
    appDOm && appDOm.scrollIntoView();
  },
  history: createWebHashHistory(),
  routes
})

// export function resetRouter () {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // the relevant part
// }

export default router
