class UserQuerySetMixin():
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).user_notes(self.request.user)
