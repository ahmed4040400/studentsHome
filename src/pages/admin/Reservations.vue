<template>
    <aside id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">

                <li>
                    <RouterLink to="/managerDashboard"
                        class="flex items-center  p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V8h2v4zm6 4h-2v-4h-2v4h-2v-6h6v6z" />
                        </svg> <span class="ms-3">الفنادق</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/reservation"
                        class="flex items-center bg-gray-200 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
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
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-56 px-4 py-3 text-right text-[#111418] w-24 text-sm font-medium leading-normal">
                        الاسم</th>
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-176 px-4 py-3 text-right text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        الفندق</th>
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-296 px-4 py-3 text-right text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        تاريخ الوصول</th>
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-416 px-4 py-3 text-right text-[#111418] w-60 text-sm font-medium leading-normal">
                        تاريخ المغادرة</th>
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-656 px-4 py-3 text-right text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        السعر</th>
                    <th
                        class="table-c1f63e65-e852-449e-8deb-be5104d5dfa0-column-896 px-4 py-3 text-right text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        الإجراءات</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(reservation, index) in reservations" :key="index" class="border-t border-t-[#dce0e5]">
                    <td class=" h-[72px] px-4 py-2 w-24 text-sm font-normal leading-normal">
                        {{ reservation.name }}
                    </td>
                    <td class=" h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        {{ reservation.hotel }}
                    </td>
                    <td class=" h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        {{ reservation.checkIn }}
                    </td>
                    <td class=" h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        {{ reservation.checkOut }}
                    </td>
                    <td class=" h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        {{ reservation.price }}
                    </td>
                    <td class=" h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        <button @click="deleteReservation(index)"
                            class="px-4 py-2 bg-red-500 text-white rounded">حذف</button>
                    </td>
                </tr>
            </tbody>
        </table>



    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const reservations = ref([
    {
        name: 'أحمد علي',
        hotel: 'فندق النيل الفاخر',
        checkIn: '2023-10-01',
        checkOut: '2023-10-05',
        price: '8000 جنيه'
    },
    {
        name: 'سارة محمد',
        hotel: 'منتجع البحر الأحمر',
        checkIn: '2023-10-10',
        checkOut: '2023-10-15',
        price: '15000 جنيه'
    },
    {
        name: 'محمد حسن',
        hotel: 'فندق الأهرامات',
        checkIn: '2023-11-01',
        checkOut: '2023-11-05',
        price: '9000 جنيه'
    },
    {
        name: 'ليلى أحمد',
        hotel: 'فندق القاهرة الدولي',
        checkIn: '2023-12-01',
        checkOut: '2023-12-05',
        price: '12000 جنيه'
    },
    {
        name: 'عمر عبد الله',
        hotel: 'منتجع شرم الشيخ',
        checkIn: '2023-12-10',
        checkOut: '2023-12-15',
        price: '20000 جنيه'
    }
]);


const deleteReservation = (index: number) => {
    reservations.value.splice(index, 1);
};

</script>
