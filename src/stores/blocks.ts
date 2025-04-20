import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Block {
  id: number
  title: string
  content: string
}

export const blocksStore = defineStore('blocks', () => {
  const blocks = ref<Array<Block>>([])

  function newBlock() {
    const id = blocks.value.length
    blocks.value.push({
      id,
      title: '',
      content: '',
    })
    return id
  }

  function saveLocally() {
    localStorage.setItem('blocks', JSON.stringify(blocks.value))
  }
  function loadLocally() {
    const stored = localStorage.getItem('blocks') ?? '[]'
    let localBlocks: Array<Block>
    try {
      localBlocks = JSON.parse(stored) as Array<Block>
    } catch (e) {
      localBlocks = []
    }
    localBlocks.forEach((block) => {
      blocks.value.push(block)
    })
  }

  function deleteBlock(id: number) {
    const index = blocks.value.findIndex((block) => block.id === id)
    if (index !== -1) {
      blocks.value.splice(index, 1)
    }
  }

  function updateBlock(id: number, title: string, content: string) {
    const block = blocks.value.find((block) => block.id === id)
    if (block) {
      block.title = title ?? ''
      block.content = content ?? ''
    }
  }

  return { blocks, newBlock, saveLocally, loadLocally, deleteBlock, updateBlock }
})
