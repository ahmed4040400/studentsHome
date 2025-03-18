<template>
    <div class="min-h-screen bg-[#2C2C2C] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
                إنشاء حساب جديد
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-400 max-w">
                أو
                <RouterLink to="/manager"
                    class="font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus:underline transition ease-in-out duration-150">
                    تسجيل الدخول إلى حسابك
                </RouterLink>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-[#23708A] py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    {{ error }}
                </div>
                <form @submit.prevent="handleRegister">
                    <div>
                        <label for="name" class="block text-sm font-medium leading-5 text-white">الاسم</label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input v-model="formData.name" id="name" name="name" placeholder="جون دو" type="text" required
                                class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="username" class="block text-sm font-medium leading-5 text-white">اسم المستخدم</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <input v-model="formData.username" id="username" name="username" placeholder="john" type="text" required
                                class="flex-1 border border-gray-600 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="email" class="block text-sm font-medium leading-5 text-white">
                            البريد الإلكتروني
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input v-model="formData.email" id="email" name="email" placeholder="user@example.com" type="email" required
                                class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="password" class="block text-sm font-medium leading-5 text-white">
                            كلمة المرور
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input v-model="formData.password" id="password" name="password" type="password" required
                                class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="password_confirmation" class="block text-sm font-medium leading-5 text-white">
                            تأكيد كلمة المرور
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input v-model="formData.passwordConfirmation" id="password_confirmation" name="password_confirmation" type="password" required
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
import { register } from '../../services/api';
import { RouterLink } from 'vue-router';

const router = useRouter();
const error = ref('');
const formData = ref({
    name: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
});

const handleRegister = async () => {
    try {
        error.value = '';

        if (formData.value.password !== formData.value.passwordConfirmation) {
            error.value = 'كلمات المرور غير متطابقة';
            return;
        }

        const response = await register({
            name: formData.value.name,
            username: formData.value.username,
            email: formData.value.email,
            password: formData.value.password,
            role: 'manager'
        });

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        router.push('/managerDashboard');
    } catch (err: any) {
        console.error('Registration error:', err);
        error.value = err.response?.data?.message || 'Failed to register. Please try again.';
    }
};
</script>