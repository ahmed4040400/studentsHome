<template>
    <div class="relative flex size-full min-h-screen flex-col bg-gray-800 text-white group/design-root overflow-x-hidden">
        <!-- Navbar -->
        <nav class="bg-[#23708A] shadow-lg">
            <div class="max-w-screen-xl mx-auto px-4">
                <div class="flex justify-between items-center h-16">
                    <div class="text-white font-bold text-xl">
                        سكن الطلاب
                    </div>
                    <button @click="handleLogout" 
                        class="px-4 py-2 bg-[#A04C59] hover:bg-[#798D97] text-white rounded-lg shadow-md transition duration-300">
                        تسجيل الخروج
                    </button>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    نحن نستثمر في مستقبل الطلاب</h1>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48"> نركز على
                    توفير شقق مريحة وآمنة للطلاب بالقرب من الجامعات.</p>
            </div>
        </section>
        <div class="layout-container flex h-full grow flex-col">
            <div class="mt-10">
                <!-- apartment card -->
                <article v-for="apartment in apartments" :key="apartment.id"
                    class="mt-5 flex flex-wrap md:flex-nowrap shadow-lg mx-auto w-full max-w-screen-lg group cursor-pointer transform duration-500 hover:-translate-y-1 bg-[#23708A] mx-4">
                    <img class="w-full max-h-[400px] object-cover md:w-1/3" :src="apartment.image_url"
                        :alt="apartment.name">
                    <div class="w-full md:w-2/3">
                        <div class="p-5 pb-10">
                            <h1 class="text-2xl font-semibold text-white mt-4">
                                {{ apartment.name }}
                            </h1>
                            <p class="text-xl text-[#798D97] mt-2 leading-relaxed">
                                {{ apartment.description }}
                            </p>
                        </div>
                        <div class="bg-[#175673] p-5">
                            <div class="sm:flex sm:justify-between">
                                <div>
                                    <div class="text-lg text-[#A04C59]">
                                        <span class="text-white font-bold">{{ apartment.distance }}</span> من الجامعة
                                    </div>
                                    <div class="flex items-center">
                                        <div class="flex">
                                            <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                <path
                                                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                </path>
                                            </svg>
                                            <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                <path
                                                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                </path>
                                            </svg>
                                            <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                <path
                                                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                </path>
                                            </svg>
                                            <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                <path
                                                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                </path>
                                            </svg>
                                            <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                <path
                                                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="text-[#798D97] ml-2 text-sm md:text-base mt-1">
                                            {{ apartment.reviews }} مراجعات
                                        </div>
                                    </div>
                                </div>
                                <button @click="openReservationModal(apartment)"
                                    class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-[#A04C59] hover:bg-[#798D97] font-bold text-white md:text-lg rounded-lg shadow-md">
                                    احجز
                                </button>
                            </div>

                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
    <div v-if="showReservationModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-[#23708A] p-6 rounded shadow-lg">
            <h2 class="text-xl mb-4 text-white">إضافة حجز جديد</h2>
            <form @submit.prevent="handleReservation">
                <div class="mb-4">
                    <label class="block mb-2 text-[#798D97]">الاسم</label>
                    <input v-model="reservationDetails.name" type="text" required
                        class="w-full p-2 border rounded bg-[#175673] text-white">
                </div>
                <div class="mb-4">
                    <label class="block mb-2 text-[#798D97]">تاريخ الوصول</label>
                    <input v-model="reservationDetails.checkIn" type="date" required
                        class="w-full p-2 border rounded bg-[#175673] text-white">
                </div>
                <div class="mb-4">
                    <label class="block mb-2 text-[#798D97]">تاريخ المغادرة</label>
                    <input v-model="reservationDetails.checkOut" type="date" required
                        class="w-full p-2 border rounded bg-[#175673] text-white">
                </div>
                <div class="mb-4">
                    <label class="block mb-2 text-[#798D97]">السعر الإجمالي</label>
                    <input v-model="reservationDetails.totalPrice" type="number" required
                        class="w-full p-2 border rounded bg-[#175673] text-white">
                </div>

                <div class="flex justify-end">
                    <button type="button" @click="showReservationModal = false"
                        class="px-4 py-2 bg-gray-500 text-white rounded mr-2">إلغاء</button>
                    <button type="submit" class="px-4 py-2 bg-[#A04C59] text-white rounded">تأكيد الحجز</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getApartments, createReservation } from '../services/api';

const router = useRouter();
const apartments = ref([]);
const showReservationModal = ref(false);
const selectedApartment = ref(null);
const reservationDetails = ref({
    name: '',
    checkIn: '',
    checkOut: '',
    totalPrice: 0
});

const openReservationModal = (apartment: any) => {
    selectedApartment.value = apartment.id;
    showReservationModal.value = true;
};

const handleReservation = async (e: Event) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
        router.push('/');
        return;
    }

    try {
        await createReservation({
            apartment_id: selectedApartment.value,
            check_in: reservationDetails.value.checkIn,
            check_out: reservationDetails.value.checkOut,
            total_price: reservationDetails.value.totalPrice
        }, token);

        showReservationModal.value = false;
        reservationDetails.value = {
            name: '',
            checkIn: '',
            checkOut: '',
            totalPrice: 0
        };
        alert('تم الحجز بنجاح!');
    } catch (error) {
        console.error('Failed to create reservation:', error);
        alert('فشل الحجز. الرجاء المحاولة مرة أخرى.');
    }
};

const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
};

onMounted(async () => {
    try {
        const response = await getApartments();
        apartments.value = response.data;
    } catch (error) {
        console.error('Failed to fetch apartments:', error);
    }
});
</script>