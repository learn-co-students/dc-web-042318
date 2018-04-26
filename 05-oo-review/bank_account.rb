class BankAccount
  attr_reader :account_holder
  @@all = []
  # ALL

  # single source of truth means only one class
  # knows about the relationship

  def initialize(balance, account_holder)
    @balance = balance
    @account_holder = account_holder
    @@all << self
    # self.account_holder.accounts << self
  end

  def deposit(amount)
    @balance += amount
  end

  def withdrawal(amount)
    @balance -= amount
  end

  def balance
    "$#{@balance}"
  end

  def self.all
    @@all
  end
end
