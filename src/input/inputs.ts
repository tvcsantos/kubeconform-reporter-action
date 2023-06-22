import * as core from '@actions/core'
import {contextExt} from '../github/utils'

export interface Inputs {
  file: string
  mode: ModeOption
  token: string
  showFilename: boolean
}

export enum Input {
  FILE = 'file',
  SHOW_FILENAME = 'show-filename',
  MODE = 'mode',
  GITHUB_TOKEN = 'token'
}

export enum ModeOption {
  PR_COMMENT = 'pr-comment',
  CHECK = 'check',
  SUMMARY = 'summary'
}

export function gatherInputs(): Inputs {
  const file = getInputFile()
  const mode = getInputMode()
  const token = getInputToken()
  const showFilename = getInputShowFilename()
  return {file, mode, token, showFilename}
}

function getInputFile(): string {
  return core.getInput(Input.FILE, {required: true})
}

function getInputShowFilename(): boolean {
  return core.getBooleanInput(Input.SHOW_FILENAME)
}

function internalGetInputMode(): ModeOption | null {
  const input = core.getInput(Input.MODE)
  if (!input) return null
  if (!Object.values<string>(ModeOption).includes(input)) {
    throw new Error(`Invalid ${Input.MODE} option '${input}'`)
  }
  return input as ModeOption
}

function getInputMode(): ModeOption {
  return (
    internalGetInputMode() ??
    (contextExt.isPullRequest() ? ModeOption.PR_COMMENT : ModeOption.SUMMARY)
  )
}

function getInputToken(): string {
  return core.getInput(Input.GITHUB_TOKEN, {required: true})
}
