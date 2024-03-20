'use client'
import Image from "next/image"
import Avatar from 'react-avatar'
import { FaUserCircle } from "react-icons/fa"

interface AvatarProps {
    src?: string | null | undefined,
    name?: string
}
export const AvatarComp = ({ src, name }: AvatarProps) => {
    if (src) return <Image src={src} alt="Avatar" width={30} height={30} className="rounded-full" />
    if (name) return <Avatar name={name} round size="30" />
    return (
        <div>
            <FaUserCircle size={24} />
        </div>
    )
}