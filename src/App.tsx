import React, { useEffect, useState } from 'react'
import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react'
import { TodoList, AddTodo } from './components'
import { FaSun, FaMoon } from 'react-icons/fa'
import { TodoItemType } from './types'

const App = () => {
  const [todos, setTodos] = useState(() => {
    const todoList = JSON.parse(localStorage.getItem('todos') || '{}')
    if (todoList && Object.keys(todoList).length === 0) {
      return []
    } else {
      return todoList
    }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const deleteTodo = (id: number) => {
    const newTodos: TodoItemType[] = todos.filter((todo: any) => todo.id !== id)
    setTodos(newTodos)
  }

  const addTodo = (todo: TodoItemType) => {
    setTodos([...todos, todo])
  }

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        aria-label="dark-mode"
        isRound={true}
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb={8}
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo List
      </Heading>
      <TodoList todos={todos} deleteItem={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  )
}

export default App
