<template>
    <div class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style='font-family: "Work Sans", "Noto Sans", sans-serif;'>
        <div class="layout-container flex h-full grow flex-col">
            <div class=" mt-10">
                <!-- hotel card -->
                <article v-for="hotel in hotels" :key="hotel.id"
                    class="mt-5 flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
                    <img class="w-full max-h-[400px] object-cover md:w-52" :src="hotel.image" :alt="hotel.name">
                    <div class="">
                        <div class="p-5 pb-10">
                            <h1 class="text-2xl font-semibold text-gray-800 mt-4">
                                {{ hotel.name }}
                            </h1>
                            <p class="text-xl text-gray-400 mt-2 leading-relaxed">
                                {{ hotel.description }}
                            </p>
                        </div>
                        <div class="bg-blue-50 p-5">
                            <div class="sm:flex sm:justify-between">
                                <div>
                                    <div class="text-lg text-gray-700">
                                        <span class="text-gray-900 font-bold">{{ hotel.distance }}</span> من القاهرة
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
                                        <div class="text-gray-600 ml-2 text-sm md:text-base mt-1">
                                            {{ hotel.reviews }} مراجعات
                                        </div>
                                    </div>
                                </div>
                                <button @click="openReservationModal()"
                                    class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
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
        <div class="bg-white p-6 rounded shadow-lg">
            <h2 class="text-xl mb-4">إضافة حجز جديد</h2>
            <form>
                <div class="mb-4">
                    <label class="block mb-2">الاسم</label>
                    <input v-model="reservationDetails.name" type="text" class="w-full p-2 border rounded">
                </div>
                <div class="mb-4">
                    <label class="block mb-2">تاريخ الوصول</label>
                    <input v-model="reservationDetails.checkIn" type="date" class="w-full p-2 border rounded">
                </div>
                <div class="mb-4">
                    <label class="block mb-2">تاريخ المغادرة</label>
                    <input v-model="reservationDetails.checkOut" type="date" class="w-full p-2 border rounded">
                </div>

                <div class="flex justify-end">
                    <button type="button" @click="showReservationModal = false"
                        class="px-4 py-2 bg-gray-500 text-white rounded mr-2">إلغاء</button>
                    <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">إضافة</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const hotels = [
    {
        id: 1,
        name: "فندق القاهرة الفخم",
        image: "https://thumbs.dreamstime.com/b/luxury-hotel-room-master-bedroom-creative-ai-design-background-instagram-facebook-wall-painting-photo-wallpaper-backgrounds-325040660.jpg",
        description: "يقع في قلب القاهرة، هذا الفندق يوفر إقامة فاخرة وخدمة ممتازة.",
        distance: "0 كم",
        reviews: 16
    },
    {
        id: 2,
        name: "فندق الإسكندرية الكبير",
        image: "https://hoteldel.com/wp-content/uploads/2021/01/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x900-1.jpg",
        description: "الإسكندرية، المدينة الساحلية الجميلة، معروفة بشواطئها الرائعة وتاريخها العريق.",
        distance: "225 كم",
        reviews: 24
    },
    {
        id: 3,
        name: "فندق الأقصر الهادئ",
        image: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        description: "الأقصر معروفة بمعابدها الفرعونية ومناظرها الطبيعية الخلابة.",
        distance: "650 كم",
        reviews: 32
    },
    {
        id: 4,
        name: "فندق أسوان الجميل",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/04/4e/b2/hotel-colline-de-france.jpg?w=1200&s=1",
        description: "أسوان معروفة بجمال نيلها ومعابدها القديمة.",
        distance: "850 كم",
        reviews: 28
    },
    {
        id: 5,
        name: "فندق شرم الشيخ التاريخي",
        image: "https://assets.graydientcreative.com/files/outlets/platinum/images/marquis-3-min.jpg",
        description: "شرم الشيخ معروفة بشواطئها الجميلة وأنشطتها البحرية الممتعة.",
        distance: "500 كم",
        reviews: 22
    }
];

const showReservationModal = ref(false);
const reservationDetails = ref({
    name: '',
    checkIn: '',
    checkOut: '',
    price: ''
});

const openReservationModal = () => {
    showReservationModal.value = true;
};


</script>