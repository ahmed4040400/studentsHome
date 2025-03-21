<template>
    <nav id="default-navbar"
        class="fixed top-0 left-0 z-40 w-full h-16 bg-[#23708A] dark:bg-[#175673] flex items-center px-4 shadow-lg">
        <ul class="flex space-x-4 font-medium">
            <li>
                <RouterLink to="/managerDashboard"
                    class="flex items-center p-2 text-white rounded-lg hover:bg-[#798D97] dark:hover:bg-[#175673] group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg> <span class="ms-3">الشقق</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/reservation"
                    class="flex items-center bg-[#A04C59] p-2 text-white rounded-lg hover:bg-[#798D97] dark:hover:bg-[#175673] group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H8v-2h4v2zm0-4H8v-2h4v2zm0-4H8V7h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" />
                    </svg> <span class="ms-3">الحجوزات</span>
                </RouterLink>
            </li>
        </ul>
    </nav>

    <div class="bg-[#2C2C2C] min-h-screen p-4">
        <table class="mt-16 min-w-full bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg">
            <thead>
                <tr class="bg-[#23708A] text-white">
                    <th class="px-4 py-3 text-right w-[400px] text-sm font-medium leading-normal">الإجراءات</th>
                    <th class="px-4 py-3 text-right w-24 text-sm font-medium leading-normal">الاسم</th>
                    <th class="px-4 py-3 text-right w-[400px] text-sm font-medium leading-normal">الشقة</th>
                    <th class="px-4 py-3 text-right w-[400px] text-sm font-medium leading-normal">تاريخ الوصول</th>
                    <th class="px-4 py-3 text-right w-60 text-sm font-medium leading-normal">تاريخ المغادرة</th>
                    <th class="px-4 py-3 text-right w-[400px] text-sm font-medium leading-normal">السعر</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="reservation in reservations" :key="reservation.id"
                    class="border-t border-t-gray-200 hover:bg-gray-100 transition-colors">
                    <td class="h-[72px] px-4 py-2 w-[400px] text-gray-700 text-sm font-normal leading-normal text-right">
                        <button @click="handleDeleteReservation(reservation.id)"
                            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">حذف</button>
                    </td>
                    <td class="h-[72px] px-4 py-2 w-24 text-gray-700 text-sm font-normal leading-normal text-right">
                        {{ reservation.user_name }}
                    </td>
                    <td class="h-[72px] px-4 py-2 w-[400px] text-gray-900 text-sm font-normal leading-normal text-right">
                        {{ reservation.apartment_name }}
                    </td>
                    <td class="h-[72px] px-4 py-2 w-[400px] text-gray-900 text-sm font-normal leading-normal text-right">
                        {{ new Date(reservation.check_in).toLocaleDateString('ar-EG') }}
                    </td>
                    <td class="h-[72px] px-4 py-2 w-60 text-gray-700 text-sm font-normal leading-normal text-right">
                        {{ new Date(reservation.check_out).toLocaleDateString('ar-EG') }}
                    </td>
                    <td class="h-[72px] px-4 py-2 w-[400px] text-gray-700 text-sm font-normal leading-normal text-right">
                        {{ reservation.total_price }} جنيه
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { getReservations, deleteReservation } from '../../services/api';

const reservations = ref([]);

const fetchReservations = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
        const response = await getReservations(token);
        reservations.value = response.data;
    } catch (error) {
        console.error('Failed to fetch reservations:', error);
    }
};

const handleDeleteReservation = async (id: number) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
        await deleteReservation(id, token);
        await fetchReservations();
    } catch (error) {
        console.error('Failed to delete reservation:', error);
        alert('Failed to delete reservation. Please try again.');
    }
};

onMounted(fetchReservations);
</script>
