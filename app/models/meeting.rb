class Meeting < ApplicationRecord
    def index
        @meetings = Meeting.all
    end
end
