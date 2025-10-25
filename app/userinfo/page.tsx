"use client";
import React, { useCallback, useState } from 'react'
import clsx from 'clsx'
import { Upload, Clipboard, X } from "lucide-react";
import { useDropzone } from 'react-dropzone'; 

export default function UserInfo(){
    
    const [profileImage, setProfileImage] = useState('');
    const [bannerImage, setBannerImage] = useState('');
    const [username, setUsername] = useState('johndoe');
    const [displayName, setDisplayName] = useState('');
    const [bio, setBio] = useState('');

    return <div className='max-w-7xl w-full min-h-screen  bg-neutral-100 mx-auto font-primary'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:divide-x divide-neutral-200 items-center'>
            <form className='bg-neutral-50 p-4 sm:p-6 w-full md:p-10 '>
                <h1 className='text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 '>User Information</h1>
                <div className='flex flex-col my-8 gap-6'>
                    <Group>
                    <Label htmlFor="username" className="after:content-['*'] after:text-orange-600 after:ml-0.5">Username</Label>
                    <Input
                    name='username'
                    type='text'
                    placeholder='Enter your username'
                    />
                </Group>  
                <Group>
                    <Label htmlFor='displayname'>
                        Display Name
                    </Label>
                    <Input
                        name='displayname'
                        type='text'
                        placeholder='Enter your display name'
                        />
                </Group>
                <Group>
                    <Label>Profile Image</Label>
                    <ProfileImageCard
                    value={profileImage}
                    onChange={e=> setProfileImage(e.target.value)}
                    />              
                    
                </Group>
                <Group>
                    <Label>Banner Image</Label>
                    <BannerImageCard 
                    value={bannerImage}
                    onChange={e => setBannerImage(e.target.value)}
                    />
                </Group>
                <Group>
                    <Label>Bio</Label>
                    <Bio
                    name='bio'
                    placeholder='Enter your bio'
                    />
                </Group>
                <Button className='w-full'>Submit</Button>                         
                </div>
            </form>



            <div className={clsx(
                'bg-white flex justify-center items-center',
                'bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]',
                'py-12 md:py-0',
                'md:sticky md:top-0 md:h-screen',
                'mask-radial-from-60%',
                'max-w-sm w-full',
                '[background-size:10px_10px]'
                )}>
                    <ProfileCard
                    profileImage={ProfileImageCard}
                    bannerImage={BannerImageCard}
                    username={username}
                    displayName={displayName}
                    bio={bio}
                    />
            </div>
        </div>
        
    </div>
}

const ProfileCard = ({
    profileImage,
    bannerImage,
    username,
    displayName,
    bio
}: {
    profileImage: string;
    bannerImage: string;
    username: string;
    displayName: string;
    bio: string;
}) => {
    return (
        <div className="border bg-white border-neutral-300 w-80 h-90 rounded-2xl overflow-hidden">
            <div className='border-b border-neutral-300 h-35 bg-blue-100'></div>
            <div className='rounded-full size-20 bg-black mx-2'></div>
        </div>
    )

}

const Label = ({children, className, ...props}:{children: React.ReactNode, className?:string} & React.LabelHTMLAttributes<HTMLLabelElement> ) => {
    return <label {...props}  className={clsx("text-neutral-800 font-medium",className)}>
        {children}
    </label>
}

const Input = ({ className,...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input 
            className={clsx(
                'shadow-input bg-white px-4 py-2 rounded-md border border-transparent',
                'focus:outline-none focus:border-gray-300 focus:bg-gray-100 focus:ring-2 focus:ring-gray-300  focus:ring-offset-2 ',
                'will-change-transform duration-200',
                'placeholder:text-neutral-400',
                 className
            )} 
                {...props}
        />

    )
}

const Group = ({children}:{children:React.ReactNode}) => {
    return <div className='flex flex-col gap-2'>
        {children}
    </div>
}

const Button = ({children, className, ...props}:{children:React.ReactNode, className?:string} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button className={clsx('font-medium text-base px-2 py-2 bg-[#FF5A4D] rounded-md inset-shadow-sm inset-shadow-orange-600 text-white hover:bg-[#f74235] cursor-pointer drop-shadow-sm',
        'transition-all duration-150 ease-out hover:-translate-y-0.5 active:scale-98',
        className
    )}
    {...props}
    >
        {children}
    </button>
}


const ProfileImageCard = ({ 
    value, 
    onChange 
}: { 
    value: string; 
    onChange: React.ChangeEventHandler<HTMLInputElement> 
}) => {

    const handlePaste = async (): Promise<void> => {
        try{
            const text = await navigator.clipboard.readText();
            if(text.startsWith('http')) {
                const syntheticEvent = {
                    target: { value: text }
                } as React.ChangeEvent<HTMLInputElement>;
                onChange(syntheticEvent);
            }
        } catch (err) {
            console.error('Clipboard access denied',err)
        }
    }   


  return (
    <div className="flex items-center gap-2">
     <ImageUploadZone 
        value={value}
        onChange={onChange}
        type="profile"
        defaultImage='string'
     />

      <Input
        name="profileImage"
        placeholder="Paste your image url"
        value={value.startsWith('data:') ? '' : value}
        onChange={onChange}
        type="url"
        className="flex-1"
      />
      <Button type ="button" onClick ={handlePaste}>
        <Clipboard size={24}/>
      </Button>
    </div>
  );
};

const BannerImageCard = ({
        value, 
        onChange
    }: {
        value: string; 
        onChange: React.ChangeEventHandler<HTMLInputElement>
    }) => {

        const handlePaste = async () => {
            try{
                const text = await navigator.clipboard.readText();
                if(text.startsWith('http')) {
                    const syntheticEvent = {
                        target: {value: text} 
                    } as React.ChangeEvent<HTMLInputElement>;
                    onChange(syntheticEvent);
                }
            } catch(err) {
                console.error("Clipboard access deneid")
            }
        }

    return (
        <>
        <ImageUploadZone
            value={value}
            onChange={onChange}
            type='banner'
            defaultImage='/banner.gif'
        />
        {/* <img src={value || '/banner.gif'} 
            alt="Banner Image"
            className='rounded-lg w-full h-32 object-cover'
        /> */}

        <div className='flex items-center gap-2'>

            <Input
                name='Banner Image'
                placeholder='Paste your image url'
                value={value.startsWith('data:') ? '' : value}
                onChange={onChange}
                type='url'
                className='flex-1'            
            />
            <Button type ="button" onClick ={handlePaste}>
                <Clipboard size={24} />
            </Button>
        </div>
        </>

        
    )
}


const Bio = ({ className,maxLength = 200, ...props}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    const [count, setCount] = useState(0);

    return (
        <div>
        <textarea
            className={clsx(
                'shadow-input bg-white px-4 py-2 rounded-md border border-transparent h-24 w-full',
                'focus:outline-none focus:border-gray-300 focus:bg-gray-100 focus:ring-2 focus:ring-gray-300  focus:ring-offset-2 ',
                'will-change-transform duration-200',
                'placeholder:text-neutral-400',
                 className
            )} 
                maxLength={maxLength}
                onChange={(e) => {
                    setCount(e.target.value.length);
                    props.onChange?.(e);
                }}
                {...props}
        />
        <div className='text-right text-sm text-neutral-400 mt-1'>
            {count}/{maxLength}
        </div>

        </div>
    )
}

const ImageUploadZone = ({
    value,
    onChange,
    type,
    defaultImage
}: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type: 'profile' | 'banner';
    defaultImage: string;
}) => {
    
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const syntheticEvent = {
                    target: { value: reader.result as string}
                } as React.ChangeEvent<HTMLInputElement>;
                onChange(syntheticEvent);
            };
            reader.readAsDataURL(file);
        }
    }, [onChange]);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: { 'image/*': []},
        multiple: false
    });

    const isProfile = type === 'profile';
    const hasImage = value && value.length > 0;

    // Clear/Remove image handler
    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        const syntheticEvent = {
            target: {value: ''}
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
    }

    return (
      

        <div {...getRootProps()}
        className={clsx(
            'overflow-hidden cursor-pointer relative group transition-all',
            'border-2',
            isDragActive ? 'border-orange-400 bg-orange-50' :
            hasImage ? 'border-transparent' : 'border-dashed border-neutral-300 bg-neutral-50',
            isProfile ? 'rounded-full w-20 h-20' : 'rounded-lg w-full h-32'
        )}        
        >
            <input {...getInputProps()} />
            {hasImage ? (
                <>
                {/* Show uploaded Image */}
                <img
                src = {value}
                alt = {isProfile ? 'Profile Image' : 'Banner Image'}
                className='w-full h-full object-cover'
                />
                {!isProfile && (
                        <button
                            onClick={handleClear}
                            className="absolute top-2 right-2 bg-neutral-50 hover:bg-neutral-300 text-black rounded-full p-1 transition-all opacity-0 group-hover:opacity-100 z-10"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}

                {/* Hover overlay */}
                    <div className={clsx(
                        'absolute inset-0 bg-black/60',
                        'flex justify-center items-center',
                        'transition-opacity opacity-0 group-hover:opacity-100',
                        isProfile ? 'rounded-full' : 'rounded-lg'
                        )}>
                            {isProfile ? (
                                <Upload className='w-5 h-5 text-white' />
                            ): (
                                <div className='flex justify-center items-center bg-white rounded-md gap-1 p-2'>
                                <Upload className={clsx(isProfile ? 'w-5 h-5' : 'w-4 h-4', 'text-black')} />
                                <p className='text-black text-xs font-medium'>       Upload 
                                </p>
                            </div>
                            )}
                    </div>
                </>
            ): (
                <>
                <div className='absolute inset-0 flex flex-col items-center justify-center gap-2 font-primary'>
                    <Upload className={clsx(isProfile ? 'w-5 h-5' : 'w-6 h-6', 'text-neutral-400')}
                    />
                    {!isProfile && (
                        <p className='text-gray-600 text-base text-center px-2'>
                            {isDragActive ? 'Drop here' : "Drag & Drop or Choose file to upload"}
                        </p>          
                    )}
                    <p className='text-xs text-neutral-500'>IMG & GIF</p>
                </div>
                </>
            )}
        </div>
    )


}



