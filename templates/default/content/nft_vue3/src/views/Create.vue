<template>
  <div>
    <!-- Start Home -->
    <section class="bg-half-170 d-table w-100" style="background: url('images/bg/01.jpg') bottom;">
      <div class="bg-overlay bg-gradient-overlay-2"></div>
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-12">
            <div class="title-heading text-center">
              <h5 class="heading fw-semibold sub-heading text-white title-dark">Upload Your Work</h5>
              <p class="text-white-50 para-desc mx-auto mb-0">Add your digital art and work</p>
            </div>
          </div><!--end col-->
        </div><!--end row-->

        <div class="position-middle-bottom">
          <nav aria-label="breadcrumb" class="d-block">
            <ul class="breadcrumb breadcrumb-muted mb-0 p-0">
              <li class="breadcrumb-item"><a href="index.html">Superex</a></li>
              <li class="breadcrumb-item active" aria-current="page">FAQs</li>
            </ul>
          </nav>
        </div>
      </div><!--end container-->
    </section><!--end section-->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <!-- End Home -->

    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="card creators creator-primary rounded-md shadow overflow-hidden sticky-bar">
              <div class="py-5" style="background: url('images/work/1.jpg');"></div>
              <div class="position-relative mt-n5">
                <img src="images/client/01.jpg" class="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block" alt="">

                <div class="content text-center pt-2 p-4">
                  <h6 class="mb-0">Steven Townsend</h6>
                  <small class="text-muted">@StreetBoy</small>

                  <ul class="list-unstyled mb-0 mt-3" id="navmenu-nav">
                    <li class="px-0">
                      <a href="creator-profile.html" class="d-flex align-items-center text-dark">
                        <span class="fs-6 mb-0"><i class="uil uil-user"></i></span>
                        <small class="d-block fw-semibold mb-0 ms-2">Profile</small>
                      </a>
                    </li>

                    <li class="px-0 mt-2">
                      <a href="creator-profile-edit.html" class="d-flex align-items-center text-dark">
                        <span class="fs-6 mb-0"><i class="uil uil-setting"></i></span>
                        <small class="d-block fw-semibold mb-0 ms-2">Settings</small>
                      </a>
                    </li>

                    <li class="px-0 mt-2">
                      <a href="lock-screen.html" class="d-flex align-items-center text-dark">
                        <span class="fs-6 mb-0"><i class="uil uil-sign-in-alt"></i></span>
                        <small class="d-block fw-semibold mb-0 ms-2">Logout</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-9 col-md-8 order-1 order-md-2">
            <div class="card rounded-md shadow p-4">
              <div class="row">
                <div class="col-lg-5">
                  <div class="d-grid">
                    <p class="fw-semibold mb-4">Upload your ART here, Please click "Upload Image" Button.</p>
                    <div class="preview-box d-block justify-content-center rounded-md shadow overflow-hidden bg-light text-muted p-2 text-center small">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                    <input type="file" id="input-file" name="input-file" accept="image/*" onchange={handleChange()} hidden />
                    <label class="btn-upload btn btn-primary rounded-md mt-4" for="input-file">Upload Image</label>
                  </div>
                </div><!--end col-->

                <div class="col-lg-7 mt-4 mt-lg-0">
                  <div class="ms-lg-4">
                    <form>
                      <div class="row">
                        <div class="col-12 mb-4">
                          <label class="form-label fw-bold">Art Title <span class="text-danger">*</span></label>
                          <input name="name" id="name" type="text" class="form-control" placeholder="Title :">
                        </div><!--end col-->

                        <div class="col-12 mb-4">
                          <label class="form-label fw-bold"> Description : </label>
                          <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Description :"></textarea>
                        </div><!--end col-->

                        <div class="col-md-6 mb-4">
                          <label class="form-label fw-bold">Type :</label>
                          <select class="form-control">
                            <option>GIFs</option>
                            <option>Music</option>
                            <option>Video</option>
                            <option>Tech</option>
                          </select>
                        </div><!--end col-->

                        <div class="col-md-6 mb-4">
                          <label class="form-label fw-bold"> Rate : </label>
                          <input name="time" type="text" class="form-control" id="time" value="0.004ETH">
                        </div><!--end col-->

                        <div class="col-12">
                          <h6>Auction :</h6>
                        </div>

                        <div class="col-md-6 mb-4">
                          <label class="form-label fw-bold"> Starting Date : </label>
                          <input name="date" type="text" class="form-control start" placeholder="Select date :">
                        </div><!--end col-->

                        <div class="col-md-6 mb-4">
                          <label class="form-label fw-bold"> Expiration date : </label>
                          <input name="date" type="text" class="form-control end" placeholder="Select date :">
                        </div><!--end col-->

                        <div class="col-lg-12">
                          <button type="submit" class="btn btn-primary rounded-md">Create Item</button>
                        </div><!--end col-->
                      </div>
                    </form>
                  </div>
                </div><!--end col-->
              </div><!--end row-->
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Create',
  components: {

  },
});
</script>