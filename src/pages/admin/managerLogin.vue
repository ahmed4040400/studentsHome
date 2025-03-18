<template>
    <div class="min-h-screen bg-[#2C2C2C] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
                تسجيل الدخول إلى حسابك
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-400 max-w">
                أو
                <RouterLink to="/managerregister"
                    class="font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus:underline transition ease-in-out duration-150">
                    إنشاء حساب جديد
                </RouterLink>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-[#23708A] py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    {{ error }}
                </div>
                <form @submit.prevent="handleLogin" class="space-y-4 md:space-y-6">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-white">البريد الإلكتروني</label>
                        <input v-model="email" type="email" name="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="user@example.com" required>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-white">كلمة المرور</label>
                        <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-gray-500 dark:text-gray-300">تذكرني</label>
                            </div>
                        </div>
                        <a href="#" class="text-sm font-medium text-blue-400 hover:underline dark:text-blue-300">نسيت
                            كلمة المرور؟</a>
                    </div>
                    <div>
                        <button type="submit"
                            class="w-full text-white bg-[#A04C59] hover:bg-[#798D97] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            تسجيل الدخول
                        </button>
                    </div>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        ليس لديك حساب؟ <RouterLink to="/managerregister"
                            class="font-medium text-blue-400 hover:underline dark:text-blue-300">إنشاء حساب جديد
                        </RouterLink>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../../services/api';
import { RouterLink } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const handleLogin = async () => {
    try {
        error.value = '';
        const response = await login(email.value, password.value);
        
        const user = response.data.user;
        if (user.role !== 'manager') {
            error.value = 'Access denied. Manager access only.';
            return;
        }

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/managerDashboard');
    } catch (err: any) {
        console.error('Login error:', err);
        error.value = err.response?.data?.message || 'Failed to login. Please try again.';
    }
};
</script>