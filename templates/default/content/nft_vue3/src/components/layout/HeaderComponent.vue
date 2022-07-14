<template>
	<!-- Navbar STart -->


	<div>

		<div class="headerClass">

			<div class="row mx-0 my-0 px-0 py-0 h-100 align-items-center justify-content-between">

				<div class="col-auto h-75" v-if="newpath!='/content'"><img src="@/assets/images/logob.png" class="logostyle"></div>
				<div class="col-auto leftarrow" v-if="newpath=='/content'" @click="$router.go(-1)">＜</div>
				<div class="col-auto titletext">熱門文章{{newpath}}</div>
				<div class="col-auto h-75"><img src="@/assets/images/logo.png" class="logostyle"></div>

			</div>


		</div>


	</div>

	<!-- Navbar End -->




</template>

<script lang="ts">
    import { defineComponent, onBeforeMount, onMounted, onBeforeUpdate, onUpdated,watch,ref} from 'vue';
	import router from '@/router'
	import { loadAPlugin } from '@/config/initPlugin.js'
    import { useRoute } from "vue-router";

    export default defineComponent({
        name: 'Home',
        data () {
            return {
                path:'',
            }
        },

        components: {

        },
        mounted() {
            // DOM 渲染完成後

        },
        setup() {

            const route = useRoute();
            let routeid:any=ref('')
			let newpath=ref('')
            watch(() => route.path,(newPath, oldPath) => {
                newpath.value=newPath
            },{ immediate: true });
            watch(() => route.query,
                (toParams, previousParams) => {
                    routeid.value=toParams.id
                },{ immediate: true });
			/*,() => route.params,
                (toParams, previousParams) => {
                    console.log(toParams)
                }*/
            onBeforeMount(() => {
                // DOM 渲染前

            });

            onMounted(() => {
                // DOM 渲染完成後


            });

            onBeforeUpdate(() => {
                // 在資料更改導致virtual DOM重新渲染前調用

            });

            onUpdated(() => {
                // 在資料更改導致virtual DOM重新渲染後調用

            });





            return {newpath,routeid}
        }
	});
</script>

<style lang="scss" scoped>

	.headerClass{
		width: 100%;
		background-color: #fff;
		height: 45px;
		position: fixed;
		z-index: 1;
	}

	.logostyle{
		height: 100%;

	}
	.titletext{

		font-size: 18px;
	}
	.leftarrow{
		font-size: 30px;
	}
</style>
