"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar as CalendarIcon, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  date: z.date({
    required_error: 'Please select a date',
  }),
  time: z.string({
    required_error: 'Please select a time',
  }),
  address: z.string().min(5, 'Please enter your full address'),
  service: z.string({
    required_error: 'Please select a service',
  }),
  message: z.string().optional(),
})

interface ServiceFormProps {
  type?: 'schedule' | 'quote'
  onSuccess?: () => void
}

const generateTimeSlots = () => {
  const slots = []
  for (let hour = 8; hour < 20; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      slots.push(time)
    }
  }
  return slots
}

const timeSlots = generateTimeSlots()

const services = [
  'AC Repair',
  'AC Installation',
  'Heating Repair',
  'Heating Installation',
  'Maintenance',
  'Air Quality',
  'Emergency Service',
]

export default function ServiceForm({ type = 'schedule', onSuccess }: ServiceFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch('https://shahkhan08.app.n8n.cloud/webhook/6b0bd2e3-07de-4f1c-9826-0ee13a081e7d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: type,
          ...values,
          date: format(values.date, 'yyyy-MM-dd'),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSuccess(true)
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[400px] items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-8 shadow-xl dark:from-emerald-950/50 dark:to-gray-900"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50"
          >
            <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-3 text-2xl font-bold text-gray-900 dark:text-white"
          >
            Request Submitted Successfully!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300"
          >
            Thank you for choosing our services. We'll contact you shortly to confirm your{' '}
            {type === 'schedule' ? 'appointment' : 'quote'}.
          </motion.p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-8 shadow-xl dark:from-emerald-950/50 dark:to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          {type === 'schedule' ? 'Schedule a Service' : 'Get a Quote'}
        </h2>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </motion.div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-800 dark:bg-gray-900/50"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(555) 555-5555"
                      type="tel"
                      {...field}
                      className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-800 dark:bg-gray-900/50"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    {...field}
                    className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-800 dark:bg-gray-900/50"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Preferred Date
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full rounded-lg border-gray-200 bg-white/50 pl-3 text-left font-normal backdrop-blur-sm hover:bg-white/80 dark:border-gray-800 dark:bg-gray-900/50',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                        className="rounded-lg border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Preferred Time
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-800 dark:bg-gray-900/50">
                        <SelectValue placeholder="Select a time">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{field.value}</span>
                          </div>
                        </SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-lg border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
                      {timeSlots.map((time) => (
                        <SelectItem
                          key={time}
                          value={time}
                          className="transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                        >
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Address
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      className="rounded-lg border-gray-200 bg-white/50 pl-10 backdrop-blur-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-800 dark:bg-gray-900/50"
                      placeholder="Enter your full address"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Service Needed
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-800 dark:bg-gray-900/50">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-lg border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
                    {services.map((service) => (
                      <SelectItem
                        key={service}
                        value={service}
                        className="transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                      >
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Additional Details
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide any additional information about your service needs..."
                    className="min-h-[100px] resize-none rounded-lg border-gray-200 bg-white/50 backdrop-blur-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-800 dark:bg-gray-900/50"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Button
                type="submit"
                className="relative w-full overflow-hidden rounded-lg bg-emerald-600 text-white transition-all hover:bg-emerald-700 disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-4 w-4" />
                    <span>
                      {type === 'schedule' ? 'Schedule Service' : 'Request Quote'}
                    </span>
                  </motion.div>
                )}
              </Button>
            </motion.div>
          </AnimatePresence>
        </form>
      </Form>
    </motion.div>
  )
}