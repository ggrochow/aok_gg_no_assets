import { NextResponse } from 'next/server'
import { randomArrayElement } from '../src/utils'
import { CLASSES } from '../src/data/classes'


export function middleware (req) {
  const { pathname } = req.nextUrl
  if (pathname === '/') {
    const className = randomArrayElement(Object.values(CLASSES))
    return NextResponse.redirect(`/builds/${className}`)
  }
  return NextResponse.next()
}