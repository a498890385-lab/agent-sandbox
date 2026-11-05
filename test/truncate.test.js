import test from 'node:test'
import assert from 'node:assert/strict'
import { truncate } from '../src/truncate.js'

test('returns text unchanged when it fits', () => {
  assert.equal(truncate('Hello', 5), 'Hello')
  assert.equal(truncate('Hello', 20), 'Hello')
})

test('cuts longer text to max characters and marks the cut', () => {
  assert.equal(truncate('Hello World', 8), 'Hello W…')
  assert.equal(truncate('Hello World', 8).length, 8)
})

test('uses the whole budget for the ellipsis when max is 1', () => {
  assert.equal(truncate('Hello', 1), '…')
})

test('returns an empty string when max is not positive', () => {
  assert.equal(truncate('Hello', 0), '')
  assert.equal(truncate('Hello', -3), '')
  assert.equal(truncate('Hello', Number.NaN), '')
  assert.equal(truncate('Hello', Number.POSITIVE_INFINITY), '')
})

test('counts Unicode code points instead of UTF-16 units', () => {
  assert.equal(truncate('😀😀😀', 2), '😀…')
})

test('treats missing text as empty', () => {
  assert.equal(truncate(null, 5), '')
  assert.equal(truncate(undefined, 5), '')
})
