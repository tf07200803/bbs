<template>
  <!-- Hero Start -->
    <section :class="['lock-screen',{'active': showParams}]">
        <div class="bg-video-wrapper">
            <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe>
            <!--Note: Vimeo Embed Background Video-->

            <!-- <iframe src="https://www.youtube.com/embed/yba7hPeTSjk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"></iframe> -->
            <!--Note: Youtube Embed Background Video-->
        </div>
        <div class="bg-overlay bg-linear-gradient-2"></div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 p-0">
                    <div class="d-flex flex-column min-vh-100 px-md-5 py-5 px-4">
                        <!-- Start Logo -->
                        <div class="text-center">
                            <a href="index.html"><img src="@/assets/images/logo-white.png" alt=""></a>
                        </div>
                        <!-- End Logo -->

                        <!-- Start Content -->
                        <div class="title-heading text-center my-auto">
                            <div class="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="mb-3 text-center">
                                                <img src="@/assets/images/client/01.jpg" class="avatar avatar-md-md rounded-pill mx-auto d-block shadow" alt="">

                                                <div class="mt-3">
                                                    <h5 class="mb-1">Calvin Carlo</h5>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-12">
                                            <div class="form-floating mb-3">
                                                <input type="password" class="form-control" id="LoginPassword" placeholder="Password">
                                                <label for="LoginPassword">Password:</label>
                                            </div>
                                        </div>
                                    
                                        <div class="col-lg-12">
                                            <div class="d-flex justify-content-between">
                                                <div class="mb-3">
                                                    <div class="form-check align-items-center d-flex mb-0">
                                                        <input class="form-check-input mt-0" type="checkbox" value="" id="RememberMe">
                                                        <label class="form-check-label text-muted ms-2" for="RememberMe">Remember me</label>
                                                    </div>
                                                </div>
                                                <small class="text-muted mb-0"><a href="reset-password.html" class="text-muted fw-semibold">Forgot password ?</a></small>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-0">
                                            <div class="d-grid">
                                                <button class="btn btn-primary rounded-md" @click="close(false)">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- End Content -->

                        <!-- Start Footer -->
                        <div class="text-center">
                            <small class="mb-0 text-light title-dark">© {{yearNow}} Superex. Design with <i class="mdi mdi-heart text-danger"></i> By <a href="http://www.bootstrapmb.com/">bootstrapmb</a>.</small>
                        </div>
                        <!-- End Footer -->
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LockScreen',
  props: {
    showParams: {
			type: Boolean,
			required: true
		}
  },
	emits: ["lockScreen"],
  setup(props, context) {
    const yearNow = new Date().getFullYear()
		const close = (show:boolean) => {
			context.emit("lockScreen", show);
		}
    return {
        yearNow,
				close
    }
  }
});
</script>

<style lang="scss" scoped>
.lock-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
		display: none;
		&.active {
			display: block;
		}
}
</style>
