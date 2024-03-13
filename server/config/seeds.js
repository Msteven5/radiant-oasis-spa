const mongoose = require('mongoose');
const db = require('./connection');
const { User, Staff, Services, Booking } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Staff', 'staff');
  await cleanDB('Service', 'services');
  await cleanDB('Booking', 'bookings');

  
  const users = await User.insertMany([
    {
      firstName: 'Michael',
      lastName: 'Davidson',
      email: 'md1232@example.com',
      password: 'abc123',
      bookings: []
    },
    {
      firstName: 'Anna',
      lastName: 'Cormier',
      email: 'ac1232@example.com',
      password: 'abc123',
      bookings: []
    }
  ]);

  
  const services = await Services.insertMany([
    { serviceName: 'Manicure', servicePrice: 25.99, addOns: [{ addOnName: 'Nail Art', addOnPrice: 5.99 }, { addOnName: 'Cuticle Treatment', addOnPrice: 3.99 }] },
    { serviceName: 'Pedicure', servicePrice: 35.99, addOns: [{ addOnName: 'Foot Massage', addOnPrice: 8.99 }, { addOnName: 'Callus Removal', addOnPrice: 4.99 }] },
    { serviceName: 'Massage', servicePrice: 45.99, addOns: [{ addOnName: 'Aromatherapy', addOnPrice: 7.99 }, { addOnName: 'Hot Stones', addOnPrice: 9.99 }] },
    { serviceName: 'Facial', servicePrice: 55.99, addOns: [{ addOnName: 'Exfoliation', addOnPrice: 6.99 }, { addOnName: 'Mask', addOnPrice: 5.99 }] },
    { serviceName: 'Yoga', servicePrice: 30.00 }
  ]);

  // Insert Staff
  const staff = await Staff.insertMany([
    { firstName: 'Michael', lastName: 'Brown', services: services.find(service => service.serviceName === 'Manicure')._id },
    { firstName: 'Jessica', lastName: 'Davis', services: services.find(service => service.serviceName === 'Yoga')._id },
    { firstName: 'Christopher', lastName: 'Wilson', services: services.find(service => service.serviceName === 'Massage')._id },
    { firstName: 'Emily', lastName: 'Jones', services: services.find(service => service.serviceName === 'Facial')._id },
    { firstName: 'Daniel', lastName: 'Taylor', services: services.find(service => service.serviceName === 'Manicure')._id },
    { firstName: 'Sophia', lastName: 'Miller', services: services.find(service => service.serviceName === 'Massage')._id },
    { firstName: 'Andrew', lastName: 'Anderson', services: services.find(service => service.serviceName === 'Facial')._id },
    { firstName: 'Olivia', lastName: 'Moore', services: services.find(service => service.serviceName === 'Pedicure')._id },
  ]);

  // Insert Bookings for Michael
  const michaelBookings = [
    {
      user: users[0]._id,
      service: services.find(service => service.serviceName === 'Manicure')._id,
      staff: staff.find(staff => staff.firstName === 'Michael')._id,
      date: new Date('01-19-2024'),
      time: '3:30 PM'
    },
    {
      user: users[0]._id,
      service: services.find(service => service.serviceName === 'Manicure')._id,
      staff: staff.find(staff => staff.firstName === 'Michael')._id,
      date: new Date('01-18-2024'),
      time: '2:30 PM'
    },
    {
      user: users[0]._id,
      service: services.find(service => service.serviceName === 'Manicure')._id,
      staff: staff.find(staff => staff.firstName === 'Michael')._id,
      date: new Date('01-20-2024'),
      time: '5:30 PM'
    }
  ];


  const annaBookings = [
    {
      user: users[1]._id,
      service: services.find(service => service.serviceName === 'Manicure')._id,
      staff: staff.find(staff => staff.firstName === 'Michael')._id,
      date: new Date('01-19-2024'),
      time: '3:30 PM'
    },
    
  ];


  const bookings = await Booking.insertMany([...michaelBookings, ...annaBookings]);

  for (const booking of bookings) {
    const userIndex = users.findIndex(user => user._id.toString() === booking.user.toString());
    users[userIndex].bookings.push(booking._id);
  }

  await Promise.all(users.map(user => user.save()));

  console.log('Data seeded successfully');
  process.exit();
});





