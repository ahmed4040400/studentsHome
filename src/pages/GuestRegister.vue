<template>
    <div class="min-h-screen bg-[#2C2C2C] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
                إنشاء حساب جديد
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-400 max-w">
                أو
                <RouterLink to="/"
                    class="font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus:underline transition ease-in-out duration-150">
                    تسجيل الدخول إلى حسابك
                </RouterLink>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-[#23708A] py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form @submit="handleRegister" class="space-y-4 md:space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-medium leading-5 text-white">الاسم</label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input v-model="name" id="name" name="name" placeholder="جون دو" type="text"
                                class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="username" class="block text-sm font-medium leading-5 text-white">اسم
                            المستخدم</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <input v-model="username" id="username" name="username" placeholder="john" type="text"
                                class="flex-1 border border-gray-600 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="email" class="block text-sm font-medium leading-5 text-white">
                            البريد الإلكتروني
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input v-model="email" id="email" name="email" placeholder="user@example.com" type="email"
                                class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="password" class="block text-sm font-medium leading-5 text-white">
                            كلمة المرور
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input v-model="password" id="password" name="password" type="password"
                                class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="password_confirmation" class="block text-sm font-medium leading-5 text-white">
                            تأكيد كلمة المرور
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input v-model="passwordConfirmation" id="password_confirmation" name="password_confirmation" type="password"
                                class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <button type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#A04C59] hover:bg-[#798D97] focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            إنشاء حساب
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { register } from '../services/api';
import { RouterLink } from 'vue-router';

const router = useRouter();
const name = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');

const handleRegister = async (e: Event) => {
    e.preventDefault();
    if (password.value !== passwordConfirmation.value) {
        alert('Passwords do not match');
        return;
    }
    try {
        const response = await register({
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        router.push('/hotels');
    } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
    }
};
</script>