TatamiApp.config(function($translateProvider) {
  
    $translateProvider.translations('en', {
        'tatami': {

            // Home View
            'home': {
                'timeline': 'Timeline',
                'mentions': 'Mentions',
                'favorites': 'Favorites',
                'companyTimeline': 'Company Timeline',

                //Top Menu
                'menu': {
                    'logo': 'Ippon Technologies Logo',
                    'title': 'Tatami',
                    'about': {
                        'title': 'About',
                        'tos': 'Terms of Service',
                        'language': {
                            'language': 'Language',
                            'en': 'English',
                            'fr': 'Français'
                        },
                        'github': {
                            'issues': 'Submit a Bug Report',
                            'fork': 'Fork Tatami on Github'
                        },
                        'ippon': {
                            'website': 'Ippon Technologies Website',
                            'blog': 'Ippon Technologies Blog',
                            'twitter': 'Follow @ippontech on Twitter'
                        }
                    },
                    'search': 'Search',
                    'help': 'Help',
                    'account': {
                        'title': 'Account',
                        'companyTimeline': 'Company Timeline',
                        'logout': 'Logout'
                    }
                },

                // Post Modal
                'post': {
                    'mandatory': 'Comment is mandatory',
                    'content': {
                        'mandatory': 'Please fill out this field.'
                    },
                    'update': 'Update your status',
                    'preview': 'Preview',
                    'edit': 'Edit',
                    'characters': {
                        'left': 'Characters Left:'
                    },
                    'options': 'Options',
                    'shareLocation': 'Share Location',
                    'group': 'Group',
                    'reply': 'Reply to this status',
                    'files': 'Files',
                    'drop': {
                        'file': 'Drop your files here'
                    },
                    'markdown': 'Markdown Supported',
                    'button': 'Post'
                },

                // Home Sidebar View
                'sidebar': {
                    'myGroups': 'My Groups',
                    'whoToFollow': 'Who To Follow',
                    'trending': 'Trending'
                },

                // Individual Status
                'status': {
                    'replyTo': 'In reply to',
                    'private': 'Private Message',
                    'view': 'View',
                    'reply': 'Reply',
                    'share': 'Share',
                    'favorite': 'Favorite',
                    'delete': 'Delete',
                    'confirmDelete': 'Are you sure you want to delete this status?',
                    'sharedYour': 'shared your status',
                    'followed': 'followed you',
                    'shared': 'shared',
                    'admin': 'Group Administrator'
                },

                // Tag View
                'tag': {
                    'title': 'Tag',
                    'follow': 'Follow',
                    'following': 'Following',
                    'unfollow': 'Unfollow'
                },

                // Group View
                'group': {
                    'join': 'Join',
                    'joined': 'Joined',
                    'leave': 'Leave',
                    'manage': 'Manage',
                    'statuses': 'Statuses',
                    'members': 'Members',
                    'membersSingular': '1 Member',
                    'membersPlural': '{{ amount }} Members'
                },

                // Profile View
                'profile': {
                    'statuses': 'Statuses',
                    'following': 'Following',
                    'followers': 'Followers',
                    'follow': 'Follow',
                    'unfollow': 'Unfollow',
                    'followsYou': 'Follows You',

                    'youStatusesSingular': 'Your 1 status',
                    'youStatusesPlural': 'Your {{ amount }} statuses',
                    'youFollowingSingular': 'You follow 1 person',
                    'youFollowingPlural': 'You follow {{ amount }} people',
                    'youFollowersSingular': 'Your 1 follower',
                    'youFollowersPlural': 'Your {{ amount }} followers',

                    'userStatusesSingular': '@{{ username }} posted 1 status',
                    'userStatusesPlural': '@{{ username }} posted {{ amount }} statuses',
                    'userFollowingSingular': '@{{ username }} follows 1 person',
                    'userFollowingPlural': '@{{ username }} follows {{ amount }} people',
                    'userFollowersSingular': '@{{ username }} has 1 follower',
                    'userFollowersPlural': '@{{ username }} has {{ amount }} followers',

                    // Profile Sidebar View
                    'sidebar': {
                        'information': 'Information',
                        'statistics': 'Statistics',
                        'firstName': 'First Name',
                        'lastName': 'Last Name',
                        'email': 'Email',
                        'jobTitle': 'Job Title',
                        'phoneNumber': 'Phone Number',
                        'statuses': 'Statuses',
                        'following': 'Following',
                        'followers': 'Followers',
                        'trending': 'Trending'
                    }
                }
            },
            
            //Account View
            'account': {

                // Profile Tab
                'profile': {
                    'title': 'Profile',
                    'dropPhoto': 'Drop your photo here to update it',
                    'update': 'Update your profile',
                    'email': 'Email',
                    'firstName': 'First Name',
                    'lastName': 'Last Name',
                    'jobTitle': 'Job Title',
                    'phoneNumber': 'Phone Number',
                    'delete': 'Delete your account',
                    'confirmDelete': 'You are about to delete your account. Are you sure?'
                },

                // Preferences Tab
                'preferences': {
                    'title': 'Preferences',
                    'notifications': 'Notifications',
                    'notification': {
                        'email': {
                            'mention': 'Get notified by email when you are mentioned',
                            'dailyDigest': 'Get a daily digest email',
                            'weeklyDigest': 'Get a weekly digest email'
                        },
                        'rss': {
                            'timeline': 'Allow RSS feed publication of your timeline',
                            'link': 'Link to your timeline RSS stream'
                        }
                    }
                },

                // Password Tab
                'password': {
                    'title': 'Password',
                    'update': 'Update your password',
                    'old': 'Old Password',
                    'new': 'New Password',
                    'confirm': 'Confirm New Password'
                },

                // Files Tab
                'files': {
                    'title': 'Files',
                    'filename': 'Filename',
                    'size': 'Size',
                    'date': 'Date',
                    'delete': 'Delete'
                },

                // Users Tab
                'users': {
                    'title': 'Users',
                    'myFriends': 'My Friends',
                    'recommend': 'Recommended',
                    'search': 'Search'
                },

                // Groups Tab
                'groups': {
                    'title': 'Groups',
                    'create': 'Create a new group',
                    'name': 'Name',
                    'description': 'Description',
                    'public': 'Public',
                    'private': 'Private',
                    'publicWarning': 'Warning: If this group is public, everybody can access it',
                    'myGroups': 'My Groups',
                    'recommended': 'Recommended',
                    'search': 'Search',
                    'group': 'Group',
                    'access': 'Access',
                    'members': 'Members',
                    'manage': 'Manage',
                    'update': 'Update group details',
                    'archive': 'Do you want to archive this group?',
                    'allowArchive': 'Yes, this group should be archived',
                    'denyArchive': 'No, this group is still in use',
                    'archiveWarning': 'Warning: Archived groups are read-only',
                    'addMember': 'Add a member',
                    'username': 'Username',
                    'role': 'Role',
                    'archived': 'Archived'
                },

                // Tags Tab
                'tags': {
                    'title': 'Tags',
                    'myTags': 'My Tags',
                    'trending': 'Trending',
                    'search': 'Search',
                    'tag': 'Tag',
                    'follow': 'Follow',
                    'following': 'Following',
                    'unfollow': 'Unfollow'
                },

                // Statuses of the Day Tab
                'sotd': {
                    'title': 'Statuses of the Day'
                }
            },

            // License Page
            'license': {
                'title': 'Source Code License',
                'copyright': 'Copyright 2012'
            },

            // Presentation Page
            'presentation': {
                'title': 'What is Tatami?',
                'devices': 'Devices',
                'openSource': 'Open Source',
                'row1': {
                    'title': 'A private, enterprise social network',
                    'line1': 'Update your status to inform your co-workers',
                    'line2': "Subscribe to other employees' time lines",
                    'line3': 'Share important information to your followers',
                    'line4': 'Discuss and reply to your colleagues',
                    'line5': 'Put important information into favorites',
                    'line6': 'Search useful information with our integrated search engine',
                    'line7': 'Use hashtags to find related information',
                    'line8': "Go to your co-workers' profiles to see what they are working on",
                    'line9': 'English and French versions available, adding other languages is easy'
                },
                'row2': {
                    'title': 'Works on all devices!',
                    'line1': 'Dynamic web application (HTML5): nothing to install, except a modern browser!',
                    'line2': "Works on mobile devices, tablets, or standard computers: the application adapts itself automatically to your device's screen",
                    'line3': 'Stay connected with your enterprise wherever you are'
                },
                'row3': {
                    'title': "Easy installation and integration with your company's IT infrastructure",
                    'line1': 'Standard Java application',
                    'line2': 'Your data belongs to you, not to your SaaS vendor!',
                    'line3': 'Integrates with your LDAP directory',
                    'line4': 'Integrates with Google Apps',
                    'line5': 'Fully Open Source, with a business-friendly Apache 2.0 license',
                    'line6': 'Easy to extend or modify according to your needs',
                    'line7': 'High performance (based on Apache Cassandra), even on small hardware',
                    'line8': 'Join the project and submit patches on our Github page:'
                },
                'row4': {
                    'title': "Also available in SaaS mode, fully managed by Ippon Technologies",
                    'line1': "If you do not want to install Tatami in your company, it's easy to use directly",
                    'line2': 'Secured multi-enterprise mode: every company has its own private space',
                    'line3': '256 bits SSL encryption: all data transfers are fully secured'
                },
                'row5': {
                    'title': 'Need more information on our product?',
                    'line1': 'Our sales team is looking forward to hearing from you! Call us at +33 01 46 12 48 48 or email us at'
                },
            },

            'form': {
                'cancel': 'Cancel',
                'save': 'Save'
            }
        }
    });

    $translateProvider.translations('fr', {

    });

    $translateProvider.preferredLanguage('en');
});