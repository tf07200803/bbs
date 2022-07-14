<template>
	<!-- header -->
  <HeaderComponent/>
  <router-view :value="str" @change-money="updatamoney"/>
	<!-- footer -->
	<!--<FooterComponent/>-->
	<!-- theme switch -->
	<!--<StyleSwitcher/>-->
</template>
<script lang="ts">
	import { defineComponent,ref,watch} from 'vue';
	import HeaderComponent from '@/components/layout/HeaderComponent.vue'
    /*import FooterComponent from '@/components/layout/FooterComponent.vue'
    import StyleSwitcher from '@/components/StyleSwitcher.vue'*/

	export default defineComponent({
		name: 'App',
        data () {
            return {
                value:'test123'
            }
        },
		components: {
			HeaderComponent,
            /*FooterComponent,
            StyleSwitcher*/
		},
        methods: {
            clickCallback(str){
                var self=this
                self.value=str
            }
        },
        watch:{

        },
		setup() {


            var str = ref('')
            const updatamoney=(newmoney)=>{
                str.value=newmoney
            }




			return {updatamoney,str}
		}
	});
</script>
<style>
.margin-top-74 {
	margin-top: 74px;
}
</style>
