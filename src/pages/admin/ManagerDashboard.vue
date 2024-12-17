<template>
    <nav id="default-navbar"
        class="fixed top-0 left-0 z-40 w-full h-16 bg-[#23708A] dark:bg-[#175673] flex items-center px-4 shadow-lg">
        <ul class="flex space-x-4 font-medium">
            <li>
                <RouterLink to="/managerDashboard"
                    class="flex items-center bg-[#A04C59] p-2 text-white rounded-lg hover:bg-[#798D97] dark:hover:bg-[#175673] group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg> <span class="ms-3">الشقق</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/reservation"
                    class="flex items-center p-2 text-white rounded-lg hover:bg-[#798D97] dark:hover:bg-[#175673] group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H8v-2h4v2zm0-4H8v-2h4v2zm0-4H8V7h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" />
                    </svg> <span class="ms-3">الحجوزات</span>
                </RouterLink>
            </li>
        </ul>
    </nav>

    <div class="bg-[#2C2C2C] min-h-screen p-4">
        <table class=" mt-16 min-w-full bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg">
            <thead>
                <tr class="bg-[#23708A] text-white">
                    <th class="px-4 py-3 text-right w-[400px] text-sm font-medium leading-normal">الإجراءات</th>
                    <th class="px-4 py-3 text-right w-[400px] text-sm font-medium leading-normal">اسم الشقة</th>
                    <th class="px-4 py-3 text-right w-[400px] text-sm font-medium leading-normal">عنوان الشقة</th>
                    <th class="px-4 py-3 text-right w-60 text-sm font-medium leading-normal">تقييم الشقة</th>
                    <th class="px-4 py-3 text-right w-[400px] text-sm font-medium leading-normal">موقع الشقة</th>
                    <th class="px-4 py-3 text-right w-[400px] text-sm font-medium leading-normal">سعر الشقة</th>
                    <th class="px-4 py-3 text-right w-14 text-sm font-medium leading-normal">صور الشقة</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(hotel, index) in hotels" :key="index"
                    class="border-t border-t-gray-200 hover:bg-gray-100 transition-colors">
                    <td
                        class="h-[72px] px-4 py-2 w-[400px] text-gray-700 text-sm font-normal leading-normal text-right">
                        <button @click="deleteHotel(index)"
                            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">حذف</button>
                    </td>
                    <td
                        class="h-[72px] px-4 py-2 w-[400px] text-gray-900 text-sm font-normal leading-normal text-right">
                        {{ hotel.name }}
                    </td>
                    <td
                        class="h-[72px] px-4 py-2 w-[400px] text-gray-900 text-sm font-normal leading-normal text-right">
                        {{ hotel.title }}
                    </td>
                    <td
                        class="h-[72px] px-4 py-2 w-[400px] text-gray-700 text-sm font-normal leading-normal text-right">
                        {{ hotel.rating }}
                    </td>
                    <td
                        class="h-[72px] px-4 py-2 w-[400px] text-gray-700 text-sm font-normal leading-normal text-right">
                        {{ hotel.location }}
                    </td>
                    <td
                        class="h-[72px] px-4 py-2 w-[400px] text-gray-700 text-sm font-normal leading-normal text-right">
                        {{ hotel.price }}
                    </td>
                    <td class="h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal text-right">
                        <img :src="hotel.image" alt="Apartment Image" class="w-14 h-14 object-cover rounded">
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="mt-4 flex justify-center">
            <button @click="showModal = true"
                class="px-6 py-3 bg-[#A04C59] text-white rounded-lg hover:bg-[#798D97] transition-colors shadow-md">إضافة
                شقة</button>
        </div>

        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-[#2C2C2C] p-6 rounded shadow-lg">
                <h2 class="text-xl mb-4 text-white">إضافة شقة جديدة</h2>
                <form @submit.prevent="addHotel">
                    <div class="mb-4">
                        <label class="block mb-2 text-white">رابط الصورة</label>
                        <input v-model="newHotel.image" type="text"
                            class="w-full p-2 border rounded bg-gray-700 text-white">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2 text-white">الاسم</label>
                        <input v-model="newHotel.name" type="text"
                            class="w-full p-2 border rounded bg-gray-700 text-white">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2 text-white">العنوان</label>
                        <input v-model="newHotel.title" type="text"
                            class="w-full p-2 border rounded bg-gray-700 text-white">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2 text-white">التقييم</label>
                        <input v-model="newHotel.rating" type="number" step="0.1"
                            class="w-full p-2 border rounded bg-gray-700 text-white">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2 text-white">المراجعات</label>
                        <input v-model="newHotel.reviews" type="number"
                            class="w-full p-2 border rounded bg-gray-700 text-white">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2 text-white">الموقع</label>
                        <input v-model="newHotel.location" type="text"
                            class="w-full p-2 border rounded bg-gray-700 text-white">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2 text-white">السعر</label>
                        <input v-model="newHotel.price" type="text"
                            class="w-full p-2 border rounded bg-gray-700 text-white">
                    </div>
                    <div class="flex justify-end">
                        <button type="button" @click="showModal = false"
                            class="px-4 py-2 bg-gray-500 text-white rounded mr-2">إلغاء</button>
                        <button type="submit" class="px-4 py-2 bg-[#A04C59] text-white rounded">إضافة</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const hotels = ref([
    {
        image: 'https://www.propertyfinder.eg/blog/wp-content/uploads/2021/10/shutterstock_1545550622-1-800x534.jpg',
        name: 'شقة جامعة القاهرة',
        title: 'تقع بالقرب من جامعة القاهرة، هذه الشقة توفر إقامة مريحة للطلاب.',
        rating: 4.6,
        reviews: 20,
        location: '0.5 كم',
        price: '2000 جنيه/ليلة'
    },
    {
        image: 'https://cdn103.adwimg.com/res/650/300/241112/classifieds/XO67jM3dh30qiL9BywauhdaWPpI3Rtum.jpg',
        name: 'شقة جامعة عين شمس',
        title: 'تقع بالقرب من جامعة عين شمس، هذه الشقة مثالية للطلاب والموظفين.',
        rating: 4.8,
        reviews: 18,
        location: '1 كم',
        price: '3000 جنيه/ليلة'
    },
    {
        image: 'https://img-3.aqarmap.com.eg/new-aqarmap-media/search-thumb-webp/2411/672bc689a1347431371840.jpg',
        name: 'شقة جامعة الإسكندرية',
        title: 'تقع بالقرب من جامعة الإسكندرية، هذه الشقة توفر إقامة مريحة للطلاب.',
        rating: 4.7,
        reviews: 25,
        location: '2 كم',
        price: '2500 جنيه/ليلة'
    },
    {
        image: 'https://img-0.aqarmap.com.eg/new-aqarmap-media/search-thumb-webp/2409/66e2b42336aa3974414416.jpeg',
        name: 'شقة جامعة المنصورة',
        title: 'تقع بالقرب من جامعة المنصورة، هذه الشقة توفر إقامة مريحة للطلاب.',
        rating: 4.5,
        reviews: 22,
        location: '3 كم',
        price: '1800 جنيه/ليلة'
    },
    {
        image: 'https://www.propertyfinder.eg/blog/wp-content/uploads/2018/08/140829012602pm_324450241587663-1.jpg',
        name: 'شقة جامعة أسيوط',
        title: 'تقع بالقرب من جامعة أسيوط، هذه الشقة توفر إقامة مريحة للطلاب.',
        rating: 4.9,
        reviews: 19,
        location: '4 كم',
        price: '2200 جنيه/ليلة'
    }
]);

const showModal = ref(false);
const newHotel = ref({
    image: '',
    name: '',
    title: '',
    rating: 0,
    reviews: 0, // Added missing property
    location: '',
    price: ''
});

const addHotel = () => {
    hotels.value.push({ ...newHotel.value });
    newHotel.value = {
        image: '',
        name: '',
        title: '',
        rating: 0,
        reviews: 0, // Added missing property
        location: '',
        price: ''
    };
    showModal.value = false;
};

const deleteHotel = (index: number) => {
    hotels.value.splice(index, 1);
};

</script>