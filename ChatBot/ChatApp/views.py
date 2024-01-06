from django.http import JsonResponse

def get_next_char(request, message):
    if message.isalpha() and len(message) == 1:
        next_char = chr((ord(message.upper()) % 26) + 65)
        return JsonResponse({'next_char': next_char})
    else:
        return JsonResponse({'error': 'Invalid input'})
