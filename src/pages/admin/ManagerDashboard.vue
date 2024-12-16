<template>
    <aside id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <RouterLink to="/"
                        class="flex items-center bg-gray-200 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V8h2v4zm6 4h-2v-4h-2v4h-2v-6h6v6z" />
                        </svg> <span class="ms-3">الفنادق</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/reservation"
                        class="flex items-center  p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V8h2v4zm6 4h-2v-4h-2v4h-2v-6h6v6z" />
                        </svg> <span class="ms-3">الحجوزات</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </aside>

    <div class="ml-64"> <!-- Added margin-left to main content -->
        <table class="flex-1">
            <thead>
                <tr class="bg-white">
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-56 px-4 py-3 text-right text-[#111418] w-14 text-sm font-medium leading-normal">
                        الصور</th>
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-176 px-4 py-3 text-right text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        الاسم</th>
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-296 px-4 py-3 text-right text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        العنوان</th>
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-416 px-4 py-3 text-right text-[#111418] w-60 text-sm font-medium leading-normal">
                        التقييم</th>
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-656 px-4 py-3 text-right text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        الموقع</th>
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-776 px-4 py-3 text-right text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        السعر</th>
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-896 px-4 py-3 text-right text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        الإجراءات</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(hotel, index) in hotels" :key="index" class="border-t border-t-[#dce0e5]">
                    <td class=" h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal">
                        <img :src="hotel.image" alt="Hotel Image" class="w-14 h-14 object-cover rounded">
                    </td>
                    <td class=" h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        {{ hotel.name }}
                    </td>
                    <td class=" h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        {{ hotel.title }}
                    </td>
                    <td class=" h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        {{ hotel.rating }}
                    </td>
                    <td class=" h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        {{ hotel.location }}
                    </td>
                    <td class=" h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        {{ hotel.price }}
                    </td>
                    <td class=" h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        <button @click="deleteHotel(index)" class="px-4 py-2 bg-red-500 text-white rounded">حذف</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="mt-4">
            <button @click="showModal = true" class="px-4 py-2 bg-blue-500 text-white rounded">إضافة فندق</button>
        </div>

        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-6 rounded shadow-lg">
                <h2 class="text-xl mb-4">إضافة فندق جديد</h2>
                <form @submit.prevent="addHotel">
                    <div class="mb-4">
                        <label class="block mb-2">رابط الصورة</label>
                        <input v-model="newHotel.image" type="text" class="w-full p-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">الاسم</label>
                        <input v-model="newHotel.name" type="text" class="w-full p-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">العنوان</label>
                        <input v-model="newHotel.title" type="text" class="w-full p-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">التقييم</label>
                        <input v-model="newHotel.rating" type="number" step="0.1" class="w-full p-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">المراجعات</label>
                        <input v-model="newHotel.reviews" type="number" class="w-full p-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">الموقع</label>
                        <input v-model="newHotel.location" type="text" class="w-full p-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">السعر</label>
                        <input v-model="newHotel.price" type="text" class="w-full p-2 border rounded">
                    </div>
                    <div class="flex justify-end">
                        <button type="button" @click="showModal = false"
                            class="px-4 py-2 bg-gray-500 text-white rounded mr-2">إلغاء</button>
                        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">إضافة</button>
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
        image: 'https://cdn.usegalileo.ai/sdxl10/6ac2565e-ec1a-456b-af28-a3a2d62206ab.png',
        name: 'فندق النيل الفاخر',
        title: 'إقامة فاخرة',
        rating: 4.6,
        reviews: 1200,
        location: 'القاهرة',
        price: '2000 جنيه/ليلة'
    },
    {
        image: 'https://cdn.usegalileo.ai/sdxl10/64612da8-988b-48e9-8db7-a29ccbb8fa2d.png',
        name: 'منتجع البحر الأحمر',
        title: 'جنة على الشاطئ',
        rating: 4.8,
        reviews: 800,
        location: 'الغردقة',
        price: '3000 جنيه/ليلة'
    },
    {
        image: 'https://cdn.usegalileo.ai/sdxl10/193ce704-7595-4571-857e-7cf120a5a550.png',
        name: 'لودج الأهرامات',
        title: 'ملاذ تاريخي',
        rating: 4.7,
        reviews: 600,
        location: 'الجيزة',
        price: '2500 جنيه/ليلة'
    },
    {
        image: 'https://cdn.usegalileo.ai/sdxl10/f97451f5-286b-4f15-8e11-2b30713ded34.png',
        name: 'سويتس النيل',
        title: 'هروب حضري',
        rating: 4.5,
        reviews: 1000,
        location: 'القاهرة',
        price: '1800 جنيه/ليلة'
    },
    {
        image: 'https://cdn.usegalileo.ai/sdxl10/c2375d9d-456f-48a8-bcdd-ed4924e36b98.png',
        name: 'كابينة الواحات',
        title: 'ملاذ طبيعي',
        rating: 4.9,
        reviews: 500,
        location: 'واحة سيوة',
        price: '2200 جنيه/ليلة'
    },
    {
        image: 'https://cdn.usegalileo.ai/sdxl10/cfc29793-b73c-477a-9c01-9befabe0e4cd.png',
        name: 'فندق البحر الأبيض المتوسط',
        title: 'مناظر خلابة',
        rating: 4.6,
        reviews: 900,
        location: 'الإسكندرية',
        price: '2100 جنيه/ليلة'
    },
    {
        image: 'https://cdn.usegalileo.ai/sdxl10/6784a931-8ba2-42c2-ac7d-32a6fc7171bb.png',
        name: 'منتجع النيل',
        title: 'مرح عائلي',
        rating: 4.7,
        reviews: 700,
        location: 'الأقصر',
        price: '2800 جنيه/ليلة'
    },
    {
        image: 'https://cdn.usegalileo.ai/sdxl10/b160764d-b3ca-4bcb-8a83-d9bedf705310.png',
        name: 'مانور النوبة',
        title: 'سحر تاريخي',
        rating: 4.8,
        reviews: 400,
        location: 'أسوان',
        price: '1900 جنيه/ليلة'
    },
    {
        image: 'https://cdn.usegalileo.ai/sdxl10/6ec2335f-b8d3-4c9a-b1ff-9d8fe6430094.png',
        name: 'شاليه البحر الأحمر',
        title: 'منتجع تزلج',
        rating: 4.9,
        reviews: 300,
        location: 'شرم الشيخ',
        price: '2600 جنيه/ليلة'
    },
    {
        image: 'https://cdn.usegalileo.ai/sdxl10/4266100f-329e-4d12-9973-d629125ce57c.png',
        name: 'لوفت القاهرة',
        title: 'لوفت فني',
        rating: 4.5,
        reviews: 1100,
        location: 'القاهرة',
        price: '1700 جنيه/ليلة'
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