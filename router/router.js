const express = require('express')
const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const { default: axios } = require('axios')
const prisma = new PrismaClient()


var dataHoje = new Date()
var dia = dataHoje
  .toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  .toString()
/*===------------ALUNOS-------------===*/
router.get('/aluno', async (req, res) => {
  const data = await prisma.aluno.findMany()
  res.json(data)
  //console.log('Testando a pagina')
  //res.send('Testando a pagina')
})

router.get('/aluno:id', async (req, res) => {
  const { id } = req.params
  const dados = await prisma.aluno.findFirst({
    where: { id: Number(id) }
  })
  res.json(dados)
})

router.post('/aluno', async (req, res) => {
  const { data, nome,  matricula } = req.body
  const dados = await prisma.aluno.create({
    data: {
      data,
      nome,
      matricula,
      
    }
  })
  res.json(dados)
})

router.put('/aluno:id', async (req, res) => {
  const { id } = req.params
  const { data, nome,  matricula} = req.body
  const dados = await prisma.aluno.update({
    where: { id: Number(id) },
    data: {
      data,
      nome,
      matricula,
    }
  })
  res.json(dados)
})

router.delete('/aluno:id', async (req, res) => {
  const { id } = req.params
  const dados = await prisma.aluno.delete({
    where: { id: Number(id) }
  })
  res.json(dados)
})

/*===------------Tutor-------------===*/
router.get('/tutor', async (req, res) => {
  const data = await  prisma.tutor.findMany()
  return res.json(data)
})

router.get('/tutor:id', async (req, res) => {
  const { id } = req.params
  const dados = await prisma.tutor.findFirst({
    where: { id: Number(id) }
  })
  res.json(dados)
})

router.post('/tutor', async (req, res) => {
  const { data,nome, cpf, endereco, cep, telefone, email, password } =
    req.body
  const dados = await prisma.tutor.create({
    data: {
      data,
      nome,
      cpf,
      endereco,
      cep,
      telefone,
      email,
      password
    }
  })
  res.json(dados)
})

router.put('/tutor:id', async (req, res) => {
  const { id } = req.params
  const { nome, cpf, endereco, cep, telefone, email, password } =
    req.body
  const dados = await prisma.tutor.update({
    where: { id: Number(id) },
    data: {
      nome,
      cpf,
      endereco,
      cep,
      telefone,
      email,
      password
    }
  })
  res.json(dados)
})

router.delete('/tutor:id', async (req, res) => {
  const { id } = req.params
  const dados = await prisma.tutor.delete({
    where: { id: Number(id) }
  })
  res.json(dados)
})

/*===------------Escola-------------===*/
router.get('/escola', async (req, res) => {
  const dados = await prisma.escola.findMany()
  res.json(dados)
})

router.get('/escola:id', async (req, res) => {
  const { id } = req.params
  const dados = await prisma.escola.findFirst({
    where: { id: Number(id) }
  })
  res.json(dados)
})

router.post('/escola', async (req, res) => {
  const { data,nome, cnpj, endereco, cep, telefone, email, password } = req.body
  const dados = await prisma.escola.create({
    data: {
      data,
      nome,
      cnpj,
      endereco,
      cep,
      telefone,
      email,
      password
    }
  })
  res.json(dados)
})

router.put('/escola:id', async (req, res) => {
  const { id } = req.params
  const { data,nome,cnpj, endereco, cep, telefone, email, password } = req.body
  const dados = await prisma.escola.update({
    where: { id: Number(id) },
    data: {
      data,
      nome,
      cnpj,
      endereco,
      cep,
      telefone,
      email,
      password
    }
  })
  res.json(dados)
})

router.delete('/escola:id', async (req, res) => {
  const { id } = req.params
  const dados = await prisma.tutor.delete({
    where: { id: Number(id) }
  })
  res.json(dados)
})

/*===------------Sala-------------===*/
router.get('/sala', async (req, res) => {
  const dados = await prisma.sala.findMany()
  res.json(dados)
})

router.get('/sala:id', async (req, res) => {
  const { id } = req.params
  const dados = await prisma.sala.findFirst({
    where: { id: Number(id) }
  })
  res.json(dados)
})

router.post('/sala', async (req, res) => {
  const { nomeSala, escola, tutor, curso } = req.body
  const dados = await prisma.sala.create({
    data: {
      nomeSala,
      escola,
      tutor,
      curso
    }
  })
  res.json(dados)
})

router.put('/sala:id', async (req, res) => {
  const { id } = req.params
  const { nomeSala, escola, tutor, curso } = req.body
  const dados = await prisma.sala.update({
    where: { id: Number(id) },
    data: {
      nomeSala,
      escola,
      tutor,
      curso
    }
  })
  res.json(dados)
})

router.delete('/escola:id', async (req, res) => {
  const { id } = req.params
  const dados = await prisma.tutor.delete({
    where: { id: Number(id) }
  })
  res.json(dados)
})

/*===------------Cursos-------------===*/
router.get('/cursos', async (req, res) => {
  const data = await prisma.cursos.findMany()
  res.json(data)
  //console.log('Testando a pagina')
  //res.send('Testando a pagina')
})

router.get('/cursos:id', async (req, res) => {
  const { id } = req.params
  const dados = await prisma.cursos.findFirst({
    where: { id: Number(id) }
  })
  res.json(dados)
})

router.post('/cursos', async (req, res) => {
  const { data, nome} = req.body
  const dados = await prisma.cursos.create({
    data: {
      data,
      nome
    
      
    }
  })
  res.json(dados)
})

router.put('/aluno:id', async (req, res) => {
  const { id } = req.params
  const { data, nomea} = req.body
  const dados = await prisma.aluno.update({
    where: { id: Number(id) },
    data: {
      data,
      nome
    }
  })
  res.json(dados)
})

router.delete('/aluno:id', async (req, res) => {
  const { id } = req.params
  const dados = await prisma.aluno.delete({
    where: { id: Number(id) }
  })
  res.json(dados)
})



module.exports = router
