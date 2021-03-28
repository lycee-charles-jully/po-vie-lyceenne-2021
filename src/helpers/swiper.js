import SwiperCore, { Autoplay, Navigation, Lazy, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/svelte';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Navigation, Lazy, Pagination]);

export { SwiperCore, Swiper, SwiperSlide };
