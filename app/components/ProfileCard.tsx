interface ProfileCardProps {
  bannerImage?: string
  profileImage?: string
  displayName: string
  username: string
  bio?: string
}

export const ProfileCard = ({
  bannerImage,
  profileImage,
  displayName,
  username,
  bio
}: ProfileCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm w-full max-w-sm mx-auto">
      <div className="relative">
        <img
          src={bannerImage || "/placeholder-banner.jpg"}
          alt="banner"
          className="w-full h-24 object-cover"
        />
        <img
          src={profileImage || "/placeholder-avatar.jpg"}
          alt="profile"
          className="w-16 h-16 rounded-full border-2 border-white absolute -bottom-8 left-4 object-cover"
        />
      </div>

      <div className="pt-10 pb-4 px-4">
        <h3 className="font-semibold text-neutral-900">{displayName || "Your Name"}</h3>
        <p className="text-sm text-neutral-500">@{username || "username"}</p>
        {bio && <p className="text-sm mt-2 text-neutral-600">{bio}</p>}
      </div>
    </div>
  )
}
