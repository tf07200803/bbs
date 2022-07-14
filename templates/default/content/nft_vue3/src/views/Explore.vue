<template>
	<!-- Start Home -->
	<section class="bg-half-170 d-table w-100 banner-bg1">
			<div class="bg-overlay bg-gradient-overlay-2"></div>
			<div class="container">
					<div class="row mt-5 justify-content-center">
							<div class="col-12">
									<div class="title-heading text-center">
											<h5 class="heading fw-semibold sub-heading text-white title-dark">Marketplace</h5>
											<p class="text-white-50 para-desc mx-auto mb-0">Explore the latest NFTs digital product</p>
									</div>
							</div><!--end col-->
					</div><!--end row-->

					<div class="position-middle-bottom">
							<nav aria-label="breadcrumb" class="d-block">
									<ul class="breadcrumb breadcrumb-muted mb-0 p-0">
											<li class="breadcrumb-item"><router-link to="/home">Begot</router-link></li>
											<li class="breadcrumb-item active" aria-current="page">Explore</li>
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
							<div class="col-lg-3 col-md-6">
									<div class="sticky-bar">
											<h5 class="mb-0">NFT Filters</h5>
											<div class="p-4 rounded-md shadow mt-4">
													<div>
															<h6>Orders By:</h6>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="NewOrder">
																	<label class="form-check-label fw-bold" for="NewOrder">Newest</label>
															</div>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="TrendOrder">
																	<label class="form-check-label fw-bold" for="TrendOrder">Trending</label>
															</div>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="OldOrder">
																	<label class="form-check-label fw-bold" for="OldOrder">Oldest</label>
															</div>
													</div>
													
													<div class="mt-4">
															<h6>Catagories By:</h6>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="GamesCatagory">
																	<label class="form-check-label fw-bold" for="GamesCatagory">Games</label>
															</div>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="ArtCatagory">
																	<label class="form-check-label fw-bold" for="ArtCatagory">Art</label>
															</div>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="MusicCatagory">
																	<label class="form-check-label fw-bold" for="MusicCatagory">Music</label>
															</div>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="VideoCatagory">
																	<label class="form-check-label fw-bold" for="VideoCatagory">Video</label>
															</div>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="MemesCatagory">
																	<label class="form-check-label fw-bold" for="MemesCatagory">Memes</label>
															</div>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="IllustrationCatagory">
																	<label class="form-check-label fw-bold" for="IllustrationCatagory">Illustration</label>
															</div>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="GIFsCatagory">
																	<label class="form-check-label fw-bold" for="GIFsCatagory">GIFs</label>
															</div>
													</div>

													<div class="mt-4">
															<h6>Creators By:</h6>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="AllCreators">
																	<label class="form-check-label fw-bold" for="AllCreators">All Creators</label>
															</div>
															<div class="form-check">
																	<input class="form-check-input" type="checkbox" value="" id="VerifyCreators">
																	<label class="form-check-label fw-bold" for="VerifyCreators">Verified Creators</label>
															</div>
													</div>
											</div>
									</div>
							</div><!--end col-->

							<div class="col-lg-9 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
									<div class="row row-cols-xl-3 row-cols-lg-2 row-cols-1">
											<div class="col">
													<router-link to="/itemdetail/123456">
														<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
																<div class="d-flex justify-content-between">
																		<div class="img-group">
																				<a href="creator-profile.html" class="user-avatar">
																						<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																				</a>
																				<a href="creator-profile.html" class="user-avatar ms-n3">
																						<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																				</a>
																				<a href="creator-profile.html" class="user-avatar ms-n3">
																						<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																				</a>
																		</div>
																		
																		<span class="like-icon shadow-sm" @click.stop="setLike()"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
																</div>
		
																<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																		<a href="item-detail-one.html"><img src="@/assets/images/gif/1.gif" class="img-fluid" alt=""></a>
																		<div class="position-absolute top-0 start-0 m-2">
																				<a href="javascript:void(0)" class="badge badge-link bg-primary">GIFs</a>
																		</div>
		
																		<div class="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
																				<i class="uil uil-clock"></i> <small id="auction-item-1" class="fw-bold"></small>
																		</div>
																</div>
		
																<div class="card-body content position-relative p-0 mt-3">
																		<a href="item-detail-one.html" class="title text-dark h6">Deep Sea Phantasy</a>
		
																		<div class="d-flex justify-content-between mt-2">
																				<small class="rate fw-bold">20.5 ETH</small>
																				<small class="text-dark fw-bold">1 out of 10</small>
																		</div>
																</div>
														</div>
													</router-link>
											</div><!--end col-->
											
											<div class="col mt-4 mt-lg-0 pt-2 pt-lg-0">
												<router-link to="/itemdetail/123456">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm" @click.stop="setLike()"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/items/1.jpg" class="img-fluid" alt=""></a>
																	<div class="position-absolute top-0 start-0 m-2">
																			<a href="javascript:void(0)" class="badge badge-link bg-primary">Arts</a>
																	</div>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">CyberPrimal 042 LAN</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
												</router-link>
											</div><!--end col-->
											
											<div class="col mt-4 mt-xl-0 pt-2 pt-xl-0">
												<router-link to="/itemdetail/123456">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm" @click.stop="setLike()"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/gif/2.gif" class="img-fluid" alt=""></a>
																	<div class="position-absolute top-0 start-0 m-2">
																			<a href="javascript:void(0)" class="badge badge-link bg-primary">Games</a>
																	</div>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Crypto Egg Stamp #5</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
												</router-link>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
												<router-link to="/itemdetail/123456">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm" @click.stop="setLike()"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/items/2.jpg" class="img-fluid" alt=""></a>
	
																	<div class="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
																			<i class="uil uil-clock"></i> <small id="auction-item-2" class="fw-bold"></small>
																	</div>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Colorful Abstract Painting</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
												</router-link>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
												<router-link to="/itemdetail/123456">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm" @click.stop="setLike()"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/items/3.jpg" class="img-fluid" alt=""></a>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Liquid Forest Princess</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
												</router-link>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
												<router-link to="/itemdetail/123456">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm" @click.stop="setLike()"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/gif/3.gif" class="img-fluid" alt=""></a>
																	<div class="position-absolute top-0 start-0 m-2">
																			<a href="javascript:void(0)" class="badge badge-link bg-primary">GIFs</a>
																	</div>
	
																	<div class="position-absolute bottom-0 start-0 m-2 bg-gradient-danger text-white title-dark rounded-pill px-3">
																			<i class="uil uil-clock"></i> <small id="auction-item-3" class="fw-bold"></small>
																	</div>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Spider Eyes Modern Art</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
												</router-link>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/items/4.jpg" class="img-fluid" alt=""></a>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Synthwave Painting</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/gif/4.gif" class="img-fluid" alt=""></a>
																	<div class="position-absolute top-0 start-0 m-2">
																			<a href="javascript:void(0)" class="badge badge-link bg-primary">GIFs</a>
																	</div>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Contemporary Abstract</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/items/5.jpg" class="img-fluid" alt=""></a>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Valkyrie Abstract Art</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/gif/5.gif" class="img-fluid" alt=""></a>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">The girl with the firefly</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/items/6.jpg" class="img-fluid" alt=""></a>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Dodo hide the seek</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/gif/6.gif" class="img-fluid" alt=""></a>
	
																	<div class="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
																			<i class="uil uil-clock"></i> <small id="auction-item-4" class="fw-bold"></small>
																	</div>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Pinky Ocean</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/items/7.jpg" class="img-fluid" alt=""></a>
																	<div class="position-absolute top-0 start-0 m-2">
																			<a href="javascript:void(0)" class="badge badge-link bg-primary">Music</a>
																	</div>
	
																	<div class="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
																			<i class="uil uil-clock"></i> <small id="auction-item-5" class="fw-bold"></small>
																	</div>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Rainbow Style</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/items/8.jpg" class="img-fluid" alt=""></a>
																	<div class="position-absolute top-0 start-0 m-2">
																			<a href="javascript:void(0)" class="badge badge-link bg-primary">Gallery</a>
																	</div>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Running Puppets</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/items/9.jpg" class="img-fluid" alt=""></a>
																	<div class="position-absolute top-0 start-0 m-2">
																			<a href="javascript:void(0)" class="badge badge-link bg-primary">Video</a>
																	</div>
	
																	<div class="position-absolute bottom-0 start-0 m-2 bg-gradient-warning text-white title-dark rounded-pill px-3">
																			<i class="uil uil-clock"></i> <small id="auction-item-6" class="fw-bold"></small>
																	</div>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">Loop Donut</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
											</div><!--end col-->
											
											<div class="col mt-4 pt-2">
													<div class="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
															<div class="d-flex justify-content-between">
																	<div class="img-group">
																			<a href="creator-profile.html" class="user-avatar">
																					<img src="@/assets/images/client/08.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/05.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																			<a href="creator-profile.html" class="user-avatar ms-n3">
																					<img src="@/assets/images/client/06.jpg" alt="user" class="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle">
																			</a>
																	</div>
																	
																	<span class="like-icon shadow-sm"><a href="javascript:void(0)" class="text-muted icon"><i class="mdi mdi-18px mdi-heart mb-0"></i></a></span>
															</div>
															<div class="nft-image rounded-md mt-3 position-relative overflow-hidden">
																	<a href="item-detail-one.html"><img src="@/assets/images/items/10.jpg" class="img-fluid" alt=""></a>
	
																	<div class="position-absolute bottom-0 start-0 m-2 bg-gradient-info text-white title-dark rounded-pill px-3">
																			<i class="uil uil-clock"></i> <small id="auction-item-7" class="fw-bold"></small>
																	</div>
															</div>
	
															<div class="card-body content position-relative p-0 mt-3">
																	<a href="item-detail-one.html" class="title text-dark h6">This is Our Story</a>
	
																	<div class="d-flex justify-content-between mt-2">
																			<small class="rate fw-bold">20.5 ETH</small>
																			<small class="text-dark fw-bold">1 out of 10</small>
																	</div>
															</div>
													</div>
											</div><!--end col-->
									</div><!--end row-->

									<div class="row justify-content-center mt-4">
											<div class="col">
													<div class="text-center">
															<a href="javascript:void(0)" class="btn btn-primary rounded-md"><i class="uil uil-process mdi-spin me-1"></i> Load More</a>
													</div>
											</div><!--end col-->
									</div><!--end row-->
							</div><!--end col-->
					</div><!--end row-->
			</div><!--end container-->
	</section><!--end section-->
	<!-- End -->

	<!-- CTA Start -->
	<section class="section pt-0 pt-sm-5 mt-0 mt-sm-5">
			<div class="container">
					<div class="bg-black rounded-md p-md-5 p-4">
							<div class="container">
									<div class="row">
											<div class="col-lg-4 col-md-6">
													<div class="app-subscribe text-center text-md-start">
															<img src="@/assets/images/cta.png" class="img-fluid" height="120" alt="">
													</div>
											</div><!--end col-->

											<div class="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
													<div class="section-title text-center text-md-start ms-xl-5 ms-md-4">
															<h4 class="display-6 fw-bold text-white title-dark mb-0">Get <span class="text-gradient-primary fw-bold">Free collections </span> <br> with your subscription</h4>
													
															<div class="mt-4">
																	<a href="javascript:void(0)" class="btn btn-link primary text-white title-dark">Subscribe Now <i class="uil uil-arrow-right"></i></a>
															</div>
													</div>
											</div><!--end col-->
									</div><!--end row-->
							</div><!--end container-->
					</div>
			</div><!--end container-->
	</section><!--end section-->
	<!-- CTA End -->
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
// import initPlugin from '@/config/initPlugin.js'

export default defineComponent({
  name: 'Explore',
  components: {

	},
	setup() {
		// let singleCriteria:any = null
		let timer:any = null
		onMounted(() => {
			// const Choices = window.Choices
			// if (!localStorage.getItem("temp")) {
				// localStorage.setItem("temp",'1');
				clearTimeout(timer)
				timer = setTimeout(() => addJs(), 2000)
			// }
			

			const addJs = () => {
				console.log(1111)
			}
		})
		onBeforeUnmount(() => {
			removeJs()
			clearTimeout(timer)
			// initPlugin('home', false)
		})
		
		const removeJs = () => {
			// singleCriteria && singleCriteria.destroy()
		}

		const setLike = () => {
			console.log('set like')
		}
		
		return {
			setLike
		}
	}
});
</script>
<style lang="scss" scoped>
.banner-bg1 {
	background: url('~@/assets/images/bg/01.jpg') bottom;
}
</style>
