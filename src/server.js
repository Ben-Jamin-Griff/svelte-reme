import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import bodyParser from 'body-parser';
import fileupload from 'express-fileupload';
import * as sapper from '@sapper/server';
import session from 'express-session';
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
const SequelizeStore = require('connect-session-sequelize')(session.Store)
import { sequelize } from './database.js'
import User from './models/user.js'
import Project from './models/project.js'


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sessionStore = new SequelizeStore({
	db: sequelize
})

// Synchronising databases

//---sessionStore.sync() already synced
Project.sync({ alter: true })
User.sync({ alter: true })

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Server code

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

// Passport.js code

passport.use(new LocalStrategy({
	usernameField: 'email',
  passwordField: 'password'
}, async function (email, password, done) {
	if (!email || !password ) {
		done('Email and password required', null)
		return
	}

	const user = await User.findOne({ where: {email: email}})

	if (!user) {
		done('User not found', null)
		return
	}

	const valid = await user.isPasswordValid(password)

	if (!valid) {
		done('Email and password do not match', null)
		return
	}

	done(null, user)
}))

passport.serializeUser((user, done) => {
	done(null, user.email)
})

passport.deserializeUser((email, done) => {
	User.findOne({ where: {email: email}}).then(user => {
		done(null, user)
	})
})

// Polka code for the server

const server = polka() // You can also use Express
	server.use(
//        mail,
        fileupload(),
        session({
                secret: '34g234gh3g43h2jg423jh',
                resave: false,
                saveUninitialized: true,
                name: 'reme',
                cookie: {
                        maxAge: 30 * 24 * 60 * 60 * 1000
                },
                store: sessionStore,
        }),
        bodyParser.json(),
        passport.initialize(),
        passport.session(),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
		session: req => {
				return ({
					user: req.session && req.session.passport && req.session.passport.user
				})
			}
		})
	)

// Server code

	server.listen(PORT, err => {
		if (err) console.log('error', err);
    });

