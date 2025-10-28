'use client';

import { CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface PartnerFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

export default function BecomePartnerForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<PartnerFormData>();
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const onSubmit = async (data: PartnerFormData) => {
    try {
      const response = await fetch('/api/become-a-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your interest! We will be in touch shortly.'
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: `${error}`
      });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Become a Partner</h2>
      
      {submitStatus && (
        <div className={`mb-6 p-4 rounded-md transition-colors duration-300 ${
          submitStatus.success 
            ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800' 
            : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
        }`}>
          <div className="flex">
            <div className="flex-shrink-0">
              {submitStatus.success ? (
                <CheckCircle className="h-5 w-5 text-green-400" />
              ) : (
                <XCircle className="h-5 w-5 text-red-400" />
              )}
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${
                submitStatus.success 
                  ? 'text-green-800 dark:text-green-200' 
                  : 'text-red-800 dark:text-red-200'
              }`}>
                {submitStatus.message}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-2 rounded-xl border transition-all duration-200
    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
    placeholder-gray-400 dark:placeholder-gray-500
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    shadow-sm hover:shadow-md
    ${errors.name ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className={`w-full px-4 py-2 rounded-xl border transition-all duration-200
    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
    placeholder-gray-400 dark:placeholder-gray-500
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    shadow-sm hover:shadow-md
    ${errors.email ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Organization <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="organization"
              {...register('organization', { required: 'Organization is required' })}
              className={`w-full px-4 py-2 rounded-xl border transition-all duration-200
    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
    placeholder-gray-400 dark:placeholder-gray-500
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    shadow-sm hover:shadow-md
    ${errors.organization ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
            />
            {errors.organization && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.organization.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Your Message<span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              rows={4}
              {...register('message', { required: 'Please tell us how we can collaborate' })}
              className={`block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-4 ${
                errors.message ? 'border-red-300 dark:border-red-500' : ''
              }`}
              defaultValue={''}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-xl font-bold text-black bg-[#F3E6C2] hover:bg-[#F3E6C2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 dark:bg-[#F3E6C2] dark:hover:bg-[#F3E6C2] dark:focus:ring-[#F3E6C2]"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}