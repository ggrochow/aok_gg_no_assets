import { NextResponse } from 'next/server'
import { CLASSES } from '../../src/data/classes'

export function middleware (req) {

  const { pathname } = req.nextUrl
  // /builds/ranger/000000000000
  const className = pathname.split('/')[2]
  if (!CLASSES[className]) {
    return NextResponse.redirect('/')
  }

  return NextResponse.next()
}