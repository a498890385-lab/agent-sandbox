import test from 'node:test'
import assert from 'node:assert/strict'
import { slugify } from '../src/slugify.js'

test('lower-cases and joins words with one dash', () => {
  assert.equal(slugify('Hello World'), 'hello-world')
})

test('collapses a run of separators into one dash', () => {
  assert.equal(slugify('a --  b__c'), 'a-b-c')
})

test('drops leading and trailing separators', () => {
  assert.equal(slugify('  --Release v1.0!-- '), 'release-v1-0')
})

test('returns an empty string for empty or non-ASCII input', () => {
  assert.equal(slugify(''), '')
  assert.equal(slugify('中文标题'), '')
})
