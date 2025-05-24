"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Player } from '@lottiefiles/react-lottie-player'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Select } from './ui/select'

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
})

export default function BookingForm() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('https://shahkhan08.app.n8n.cloud/webhook-test/6b0bd2e3-07de-4f1c-9826-0ee13a081e7d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'schedule',
          ...data,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      // You could add error handling UI here
    }
  }

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-800"
      >
        <Player
          autoplay
          loop
          src="/animations/success.json"
          style={{ height: '200px', width: '200px' }}
        />
        <h3 className="mb-4 text-2xl font-semibold text-emerald-600">Thank You!</h3>
        <p className="text-gray-600 dark:text-gray-300">
          We've received your request and will contact you shortly.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
      <h2 className="mb-6 text-2xl font-semibold">Schedule Service</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4"
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  {...register('name')}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">{errors.name.message as string}</span>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">{errors.email.message as string}</span>
                )}
              </div>

              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!watch('name') || !watch('email') || errors.name || errors.email}
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                Next
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4"
            >
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && (
                  <span className="text-sm text-red-500">{errors.phone.message as string}</span>
                )}
              </div>

              <div>
                <Label htmlFor="service">Service Needed</Label>
                <Select {...register('service')}>
                  <option value="">Select a service</option>
                  <option value="ac-repair">AC Repair</option>
                  <option value="heating">Heating Service</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="installation">New Installation</option>
                </Select>
                {errors.service && (
                  <span className="text-sm text-red-500">{errors.service.message as string}</span>
                )}
              </div>

              <div>
                <Label htmlFor="message">Additional Details</Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                  disabled={!isValid}
                >
                  Submit Request
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}