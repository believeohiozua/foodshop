from allauth.account.adapter import DefaultAccountAdapter


class VaasUserProfileAdapter(DefaultAccountAdapter):
    def save_user(self, request, user, form, commit=False):
        user = super().save_user(request, user, form, commit)
        data = form.cleaned_data
        user.phone = data.get('phone')
        user.address = data.get('address')
        user.local_govt = data.get('local_govt')
        user.state = data.get('state')
        user.gender = data.get('gender')
        user.birthday = data.get('birthday')
        user.slug = data.get('slug')
        user.save()
        return user
