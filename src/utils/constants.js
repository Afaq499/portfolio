import app from '../utils/images/Rectangle 20.png';
import tool from '../utils/images/Rectangle 24.png'
import web from '../utils/images/Rectangle 21.png'

export const workHistory = [
  {
    title: 'FBA (Fulfillment by amazon)',
    description: `Fulfillment by Amazon (FBA) is a service that allows you to outsource order fulfillment to Amazon.
      The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.`,
    role: 'My role was to manage incoming and outgoing inventory for Amazon using SPAPI and Manage statistics on the web',
    type: 'Web Development',
    src: web
  },
  {
    title: 'Bwd (Blue Warehouse Discounts)',
    description: `Bwd is a business offering discount pricing on a variety of closeout and everyday items. 
    Customers can reserve products through the app before going to the store and can also pay for them through the app if they want quick delivery.`,
    role: `My role was to work as a full-stack developer (MERN), creating APIs for data fetching and displaying products on the frontend.`,
    type: 'App Development',
    src: app
  },
  {
    title: 'Amz Ascension',
    description: `Amz Ascension is a tool that displays Amazon product advertising campaign data,
      including the following statistics: sales, total advertising costs for a product, total sales, the percentage of total sales,
      total clicks, cost per click, profit and loss presented through numerical data and graphical representations.`,
    role: `My role was to run background jobs, synchronize all product advertising data in the database on a daily basis,
    and implement an API that calculates statistics to display both graphically and numerically.`,
    type: 'Web Development',
    src: tool
  },
  {
    title: 'Roney Innovations',
    description: `Roney Innovations is an FBA (Fulfillment by Amazon) management tool that also handles incoming and outgoing inventory, 
    manages products on the Amazon store, and handles the post-shipment flow using SpApi`,
    role: `My role was to work as a full-stack developer (MERN), creating APIs for data fetching, SpApis configurations and displaying products on the frontend.`,
    type: 'Web Development',
    src: web
  },
  {
    title: 'Inframent',
    description: `The Inframent mobile app is developed for workers to manage their work through the app. 
    A cadastral map is used to track their live location. If a worker completes some work, 
    they can attach a photo of that work so the admin can monitor work progress`,
    role: `My role was to work as a frontend developer to manage and integrate the UI process.`,
    type: 'App Development',
    src: app
  },
  {
    title: 'Virtual Fitness Trainer',
    description: `In this app, users can log in,
    and during that process, they will enter their weight, height, and age. Our app will then calculate their
    BMI and suggest daily diet and exercise plans through reminder notifications.`,
    type: 'App Development',
    src: app
  },
]