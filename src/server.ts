import { app } from './app'

// deixando a porta na variavel PORT por ou se não na 3000 
const porta = process.env.PORT || 3000

// callback pra voltar um log dizendo que está rodando na porta definida
const server = app.listen(porta, () => console.log(`App ouvindo na porta ${porta}`))

// usando o process do node e o listener .ON pra ele ficar observando o sinal SIGINT(SINAL DE INTERRUPÇÃO) e 
// definindo callback pra "matar" o servidor e voltar um log "App finalizado"
process.on('SIGINT', () => {
    server.close()
    console.log('App finalizado')
})