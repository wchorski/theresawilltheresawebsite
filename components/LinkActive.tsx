import { useRouter } from 'next/router'
import Link from 'next/link'
import { MouseEvent } from 'react';

export default function ActiveLink({ name, href }: {name: string, href: string}) {
  const { pathname: urlPathname, push: routerPush  } = useRouter();


  const style = {
    backgroundColor: urlPathname === href ? 'var(--color-alt)' : '',
  }

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    routerPush(href)
  }

  return (
    <Link href={href}>
      <a style={style} onClick={handleClick} className='hurdur'> 
        {name} 
      </a>
    </Link> 

  )
}