/**
 * Created by Yuri on 9/12/2015.
 */

var messageBoard = angular.module('messageBoard', []);

messageBoard.controller('MessageBoardCtrl', function ($scope) {
    $scope.messages = [
        {'title': 'Lets make some flood',
            'text': 'Can we speak about something',
            'reply': 'Yes, I suggest girls'},
        {'title': 'Go for a drag',
            'text': 'This sunday at usual time',
            'reply': 'Aha, on second Marshall'},
        {'title': 'Suggest a moto-service ',
            'text': 'I need to change oil, clean a chain, and check overall technical condition',
            'reply': 'You can try Roma at Stalingrad Heroes Ave.'}
    ];
});