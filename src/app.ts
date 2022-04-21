import * as express from 'express'
import * as cors from 'cors'
import * as logger from 'morgan'

import { router } from './routes/index'

/**
 * Cria o app
 */
export const app = express()

/**
 * Configuração dos middlewares
 * express.json pra reconhecer o corpo das requisições em formato json
 * cors para liberar todas as portas, permitindo aplicações externas acessarem a api
 * morgan pra vir um log melhor e mais detalhado, o 'dev' já serve
 */
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

/**
 * Integra o endpoint na aplicação
 */
app.use('/', router)