import express from 'express'
import dotenv, { config } from 'dotenv'
import morgan from 'morgan'
import exphbs from 'express-handlebars'
import connectDB from './config/db.js'

// Load configuration file
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

const PORT = process.env.PORT

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
