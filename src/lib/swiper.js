import SwiperCore from 'swiper/swiper.cjs';
import { Autoplay, Navigation, Lazy, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/swiper-svelte.cjs';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Navigation, Lazy, Pagination]);

export { SwiperCore, Swiper, SwiperSlide };
